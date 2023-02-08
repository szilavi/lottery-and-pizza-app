/**
 * This pizzaHandler object is responsible for choosing pizza by IDs
 * Baking of pizzas (bakePizzasById method) takes the same number of seconds as 'orderListSize' => 2 pizzas need 2 seconds
 * If the type of pizzaIdList is not an array, do not bake anything, just return an empty array
 */

const pizzaHandler = {};

pizzaHandler.pizzaList = [
  { id: 1, name: "Hawaii", price: 1950 },
  { id: 2, name: "Salame", price: 2000 },
  { id: 3, name: "Prosciutto", price: 2100 },
  { id: 4, name: "Margherita", price: 1950 },
  { id: 5, name: "Quattro formaggi", price: 2200 },
  { id: 6, name: "Frutti di mare", price: 2350 },
  { id: 7, name: "János bácsi kedvence", price: 2450 },
];

pizzaHandler.bakePizzasById = function (pizzaIdList) {
  if (!Array.isArray(pizzaIdList) || pizzaIdList.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakedPizzas = pizzaIdList.map((pizza) => ({
        pizza: pizza,
      }));
      resolve(bakedPizzas);
    }, pizzaIdList.length * 1000);
  });
};

module.exports = { pizzaHandler };
