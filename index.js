// Отримати дані про фільм за допомогою OMDB API Опис: Використайте публічне API OMDB для отримання даних про фільм.Зробіть GET - запит за адресою http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}, де {API_KEY} - ваш ключ API OMDB, а {movie_title} - назва фільму. Перегляньте отримані дані щодо фільму.
// http://www.omdbapi.com/?t=Spiderman&y=2024

let movieInputer = document.querySelector(".movie__inputer")
const button = document.querySelector(".button__submitter");

movieInputer.addEventListener("change", (e) => {
  const movie = e.target.value
  console.log(movie)
  getMovie(movie).then((data) => {
    console.log(data)
    htmlMovie(data)
  })
})
const movieList = document.querySelector(".movie__list")
function getMovie(movieInput) {
  // console.log(movieInput)
  const data = fetch(`https://www.omdbapi.com/?apikey=659ac179&t=${movieInput}`).then((returnData) => {
    console.log(returnData)
    return returnData.json()
  })
  return data
}

const htmlMovie = (movieData) => {
  const htmlmovies = `    <li class="movie__item">
  <h1 class="movie__title">Title: ${movieData.Title}</h1>
  <p class="movie__text">Rated:${movieData.Rated}</p>
  <p class="movie__actors">Actors:${movieData.Actors}</p>
  <p class="movie__country">Country: ${movieData.Country}</p>
  <img class="movie__image" src=${movieData.Poster}>
</li>`
  movieList.innerHTML = htmlmovies
}