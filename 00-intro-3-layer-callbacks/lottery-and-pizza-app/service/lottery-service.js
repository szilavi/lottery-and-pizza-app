/**
 * You need to import the carHandler method from 'cars' and the customerHandler from 'customers'
 * Two methods are needed: 'chooseWinners' and 'makeRaffleWithCar'
 *
 */

const { carHandler } = require("../integration/cars");

const customerHandler = require("../integration/customers").customerHandler;
const randomCar = require("../integration/cars").carHandler;

const lottery = {};

lottery.chooseWinners = function (sumOfWinners) {
  customerHandler.chooseRandomCustomers(sumOfWinners).then((data) => {
    console.log("Winners are:");
    console.table(data);
    lottery.makeRaffleWithCar(data).then((data) => console.table(data));
  });
};

lottery.makeRaffleWithCar = function (winners) {
  if (!Array.isArray(winners)) {
    return "No winners or wrong raffle";
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = winners.map((winner) => {
        const car = carHandler.chooseRandomCar();
        return { winner: winner.name, carType: car.type };
      });
      resolve(result);
    }, 2000);
  });
};

module.exports = { lottery };
