/**
 * This customHandler is responsible for choosing random customers (winners)
 * The whole raffle takes 3 seconds. The return value has to be a list with the lucky customers' objects
 * In case of the type of parameter is not a 'number' or greater than the customerList size, let the parameter's value be zero
 * Finish the 'chooseRandomCustomers' method
 */
const customerHandler = {};

customerHandler.customerList = [
  { id: 1, name: "Steve Jobs" },
  { id: 2, name: "Bill Gates" },
  { id: 3, name: "Brendan Eich" },
  { id: 4, name: "Ryan Dahl" },
  { id: 5, name: "Larry Page" },
];

customerHandler.chooseRandomCustomers = (sumOfCustomers) => {
  return new Promise((resolve, reject) => {
    if (sumOfCustomers > customerHandler.customerList.length) {
      sumOfCustomers = 0;
    }

    setTimeout(() => {
      let winners = [];
      let randomCustomerList = customerHandler.customerList.sort(
        () => Math.random() - 0.5
      );
      for (let i = 0; i < sumOfCustomers; i++) {
        winners.push(randomCustomerList[i]);
      }

      resolve(winners);
    }, 3000);
  });
};

module.exports = { customerHandler };
