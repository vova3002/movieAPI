// Отримати дані про фільм за допомогою OMDB API Опис: Використайте публічне API OMDB для отримання даних про фільм.Зробіть GET - запит за адресою http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}, де {API_KEY} - ваш ключ API OMDB, а {movie_title} - назва фільму. Перегляньте отримані дані щодо фільму.
const movieList = document.querySelector(".movie__list")
function getMovie(){
  const data = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=659ac179").then((returnData) => {
    return returnData.json()
  })
  return data
}
getMovie().then((movieData) => {
  console.log(movieData)
  function html(){
    const movieHtml = `    <li class="movie__item">
    <img class="movie__image" src=${movieData.Poster}>
    <p class="movie__actor">Actors: ${movieData.Actors}</p>
    <p class="movie__awards">Awards: ${movieData.Awards}</p>
    <p class="movie__country">Country: ${movieData.Country}</p>
    <p class="movie__english">Language: ${movieData.Language}</p>
    </li>`
    return movieHtml
  }
  movieList.innerHTML = html()
})