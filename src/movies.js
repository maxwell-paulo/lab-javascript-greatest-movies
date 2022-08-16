// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did Steven Spielberg direct?
function howManyMovies(moviesArray) {
  const allSSMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return allSSMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const moviesAverage = moviesArray.reduce((acc, currentElement, index) => {
    if (index === moviesArray.length - 1) {
      acc += currentElement.score;

      return acc / moviesArray.length;
    }
    if (currentElement.score === "") {
      currentElement.score = 0;
    }
    return (acc += currentElement.score);
  }, 0);
  return moviesAverage.toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (allDramaMovies.length === 0) {
    return 0;
  }
  const dramaMoviesAvarage =
    allDramaMovies.reduce((acc, currentElement) => {
      return (acc += currentElement.score);
    }, 0) / allDramaMovies.length;
  return dramaMoviesAvarage.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArrayCopy2 = [...moviesArray];
  first20Movies = moviesArrayCopy2.slice(0, 20);
  const onlyTitles = first20Movies.map((movie) => movie.title);
  onlyTitles.sort((a, b) => {
    return a.localeCompare(b);
  });
  return onlyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
