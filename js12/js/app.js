const moviesHTML = document.querySelector('.movies')


movies.forEach((item, index) => {
  const ratingClass  = getColorAndClassForRating(item.rating);
  moviesHTML.insertAdjacentHTML('beforeend', `
    <div class="movie">
        <div class="movie__cover-inner">
          <img src="img/${item.image}" class="movie__cover" alt="" />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${item.name}</div>
          <div class="movie__category">${item.category.join(', ')}</div>
          <div class="movie__average ${ratingClass}">${item.rating / 10}</div>
        </div>
      </div>
    `)
})
function getColorAndClassForRating(rating) {
  if (rating >= 1 && rating <= 30) {
    return 'movie__average--red' ;
  } else if (rating >= 31 && rating <= 60) {
    return 'movie__average--orange' ;
  } else if (rating >= 61 && rating <= 80) {
    return 'movie__average--yellow' ;
  } else if (rating >= 81 && rating <= 100) {
    return 'movie__average--green' ;
  } else {
    return 'movie__average--black' ;
  }
}
movies.forEach(movie => {
  const color = getColorAndClassForRating(movie.rating);
  console.log(`${movie.name}: ${color}`);
});


const searchInput = document.querySelector('.header__search');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  const searchText = searchInput.value.trim().toLowerCase();
  const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchText));
  renderMovies(filteredMovies);
}


function renderMovies(movies) {
  const moviesContainer = document.querySelector('.movies');
  moviesContainer.innerHTML = '';
  movies.forEach(movie => {
    const ratingClass = getColorAndClassForRating(movie.rating);
    moviesContainer.insertAdjacentHTML('beforeend', `
      <div class="movie">
        <div class="movie__cover-inner">
          <img src="img/${movie.image}" class="movie__cover" alt="" />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.name}</div>
          <div class="movie__category">${movie.category.join(', ')}</div>
          <div class="movie__average ${ratingClass}">${movie.rating / 10}</div>
        </div>
      </div>
    `);
  });
}


renderMovies(movies);