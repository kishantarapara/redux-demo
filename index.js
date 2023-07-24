const store = require('./store');
const actions = require('./actions');

const { buyCake, buyIceCream } = actions;

console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake(1));
store.dispatch(buyCake(2));
store.dispatch(buyCake(3));
store.dispatch(buyIceCream(1));
store.dispatch(buyIceCream(2));
store.dispatch(buyIceCream(3));


unsubscribe();