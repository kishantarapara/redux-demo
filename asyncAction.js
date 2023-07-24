const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const { createStore, applyMiddleware} = redux;

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
};

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
};

const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data.map(user => user.id);
            dispatch(fetchUserSuccess(users));
        }).catch(error => {
            dispatch(fetchUserFailure(error.message));
        })
    }
}

const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return {
                ...prevState,
                loading: true,
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());
