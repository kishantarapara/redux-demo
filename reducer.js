const actions = require('./actions');

const { BUY_CAKE, BUY_ICECREAM } = actions;

const initialCakeStore = {
    noOfCakes: 10,
}

const cakeReducer = (previousState = initialCakeStore, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...previousState,
            noOfCakes: previousState.noOfCakes - action.info.noOfCakes,
        }
        default: return previousState;
    }
}

const initialIceCreamStore = {
    noOfIceCreams: 20,
}

const iceCreamReducer = (previousState = initialIceCreamStore, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...previousState,
            noOfIceCreams: previousState.noOfIceCreams - action.info.noOfIceCreams,
        }
        default: return previousState;
    }
}

module.exports = {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
};