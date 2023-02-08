/**
 * This index file has to "run" the lottery and pizza ordering process
 * You have to import the services
 * After that it has to call the orderPizza and chooseWinners methods
 *
 */

const { carHandler } = require("./integration/cars");

//RANDOM CUSTOMER TEST (WORK)
// const customerHandler = require("./integration/customers").customerHandler;

// function randomCustomerLogger() {
//   customerHandler.chooseRandomCustomers(4).then((data) => console.table(data));
// }

// randomCustomerLogger();

//RANDOM CAR TEST (WORK)
// const randomCar = require("./integration/cars").carHandler;

// function randomCarLogger() {
//   console.log(carHandler.carList);
//   console.table(randomCar.chooseRandomCar());
//   console.log(carHandler.carList);
// }

// randomCarLogger();
// randomCarLogger();
// randomCarLogger();
// randomCarLogger();
// randomCarLogger();
// randomCarLogger();
// randomCarLogger();
// randomCarLogger();

//CHOOSE WINNER (WORK)

//const lottery = require("./service/lottery-service").lottery;

// function lotteryLogger() {
//   console.table(lottery.chooseWinners(2));
// }

// lotteryLogger();

// function lotteryMakeRaffle() {
//   lottery.makeRaffleWithCar(["Test Bob"]).then((data) => console.table(data));
// }

// lotteryMakeRaffle();

//--------------------------------------------------------------------------------------
//FINAL
const lottery = require("./service/lottery-service").lottery;

function logger() {
  console.table(lottery.chooseWinners(4));
}

logger();

//--------------------------------------------------------------------------------------

// PIZZA ORDER

//PIZZAHANDLER (WORKS)
//const pizzas = require("./integration/pizzas").pizzaHandler;
// function pizzasLogger() {
//   pizzas
//     .bakePizzasById([
//       { id: 1, name: "Hawaii", price: 1950 },
//       { id: 2, name: "Salame", price: 2000 },
//     ])
//     .then((data) => console.table(data));
// }

// pizzasLogger();

//FINAL
const pizzasOrderer = require("./service/order-service").orderHandler;

function orderLogger() {
  pizzasOrderer
    .orderPizza([
      { id: 1, name: "Hawaii", price: 1950 },
      { id: 1, name: "Hawaii", price: 1950 },
      { id: 2, name: "Salame", price: 2000 },
      { id: 2, name: "Salame", price: 2000 },
    ])
    .then((data) => console.table(data));
}

orderLogger();
