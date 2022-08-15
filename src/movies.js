// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  function todosDiretores(currentElement) {
    return currentElement.director;
  }
  const allDirectors = moviesArray.map(todosDiretores);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did Steven Spielberg direct?
function howManyMovies(moviesArray) {
  function SSfilmes(currentMovie) {
    if (
      currentMovie.director === "Steven Spielberg" &&
      currentMovie.genre.includes("Drama")
    ) {
      return currentMovie;
    }
  }
  const allssMovies = moviesArray.filter(SSfilmes);
  return allssMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let finalSum = 0;
  function todasAsNotas(currentElement) {
    return currentElement.score;
  }
  const allScores = moviesArray.map(todasAsNotas);
  function finalAvarage(currentElement) {
    allScores.filter(pv, cv);
  }
  return allScores;
}
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
