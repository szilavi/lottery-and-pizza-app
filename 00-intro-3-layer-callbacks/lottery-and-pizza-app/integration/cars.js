/**
 * This carHandler is responsible for choosing 1 random piece of car. This process does not take any plus time
 * Make a 'chooseRandomCar'method that just returns a random car
 */
const carHandler = {};

carHandler.carList = [
  { id: 1, type: "Ford" },
  { id: 2, type: "BMW" },
  { id: 3, type: "Porsche" },
  { id: 4, type: "Ferrari" },
  { id: 5, type: "Lada" },
  { id: 6, type: "Dacia" },
  { id: 7, type: "Fiat" },
];

carHandler.chooseRandomCar = () => {
  const randomNumber = Math.floor(Math.random() * carHandler.carList.length);
  const randomCar = carHandler.carList[randomNumber];
  carHandler.carList.splice(randomNumber, 1);

  return randomCar;
};

module.exports = { carHandler };
