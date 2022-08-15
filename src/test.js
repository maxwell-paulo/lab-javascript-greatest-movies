// let numeros = [0, 1, 2, 3, 4, 5, 6];
// let total = numeros.reduce((acumulador, numero, indice, original) => {
//   // console.info(`${acumulador} total até o momento`);
//   // console.log(`${numero} valor atual`);
//   console.log(`${indice} indice atual`);
//   // console.log(`${original} array original`);
//   return (acumulador += numero);
// }, 0);
// console.warn("acaboooou");
// console.log(total);

function scoresAverage(moviesArray) {
  let finalSum = 0;
  const sum = moviesArray.score.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    finalSum
  );
  return finalSum;
}
