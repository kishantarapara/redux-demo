const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake(noOfCakes) {
  return {
    type: BUY_CAKE,
    info: { noOfCakes },
  };
}

function buyIceCream(noOfIceCreams) {
    return {
        type: BUY_ICECREAM,
        info: { noOfIceCreams },
    }
}

module.exports = {
  BUY_CAKE,
  buyCake,
  BUY_ICECREAM,
  buyIceCream,
};
