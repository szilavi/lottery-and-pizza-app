/**
 * You have to import the pizzaHandler method from 'pizzas'
 * Two methods are needed: 'orderPizza' and 'makeBill'
 * Do not forget to export the module
 *
 */

const { pizzaHandler } = require("../integration/pizzas");

const pizzas = require("../integration/pizzas").pizzaHandler;

const orderHandler = {};

orderHandler.orderPizza = async function (pizzaIdList) {
  if (!Array.isArray(pizzaIdList) || pizzaIdList.length === 0) {
    return Promise.resolve({});
  }

  const pizzas = await pizzaHandler.bakePizzasById(pizzaIdList);

  return orderHandler.makeBill(pizzas);
};

orderHandler.makeBill = function (pizzas) {
  let bill = [];
  pizzas.forEach((pizza) => {
    const checkPizza = pizza;
    const bakedPizza = bill.find(
      (element) => element.name === checkPizza.pizza.name
    );

    if (bakedPizza) {
      bakedPizza.piece += 1;
    } else {
      const orderedPizza = pizza;
      bill.push({
        id: orderedPizza.pizza.id,
        name: orderedPizza.pizza.name,
        price: orderedPizza.pizza.price,
        piece: 1,
      });
    }
  });

  bill.push({
    name: "TotalPrice",
    price: bill.reduce((acc, item) => acc + item.price * item.piece, 0),
  });
  return bill;
};

module.exports = { orderHandler };
