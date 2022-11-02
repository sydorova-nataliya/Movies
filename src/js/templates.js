import { convertDate, calculatePopularity, generateImageUrl} from "./utils";

export const renderMovies = (movies, title) => (`
  <div class="section">
    <section class="container">
      <h2 class="name-part">${title}</h2>
      <div class="movie-holder">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);

export const renderMovie = ({id, title, poster_path,original_title, vote_average, release_date}) => (`
        <div class="movie">
            <a href="#movieId=${id}" >
                <img class="movie__photo" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
            </a>
            <a class="movie__title" href="#movieId=${id}">${original_title}</a>
            <span class="movie__popularity">${calculatePopularity(vote_average)}</span>
            <p class="movie__date">${convertDate(release_date)}</p>
        </div>
       `)


export const renderMovieDetails = ({id, genres,homepage, status, title,backdrop_path,original_title, vote_average, release_date, overview, tagline}) => (`
       <div class="section">
         <section class="container">
           <div class="movie-details">
              <a href="#movieId=${id}" >
                <img class="movie-details__photo" src="${generateImageUrl(backdrop_path)}" alt="${title}" loading="lazy">
              </a>
            <div class="wrapper">
              <a class="movie-details__title" href="#movieId=${id}">${original_title}</a>
              <span class="movie-details__popularity">${calculatePopularity(vote_average)}</span>
              <p class="movie-details__date">${convertDate(release_date)}</p>
              <p class="movie-details__tagline">${tagline}</p>
              <h4 class="movie-details__overview">Overview</h4>
              <p class="movie-details__overview-text">${overview}</p>
              <h5 class="movie-details__genres">Genres:</h5>
              <ul class="movie-details__list">
              ${genres.map(({name}) => `<li class="list-item">${name}</li>`).join('')}
              </ul>
              <p class="movie-details__status">Status: ${status}</p>
              <span>Website:</span>
              <a href="${homepage}" target="_blank" class="movie-details__homepage">${homepage}</a>
            </div>
           </div>
         </section>
       </div>
     `);

export const renderError = ({status_code, status_message}) => (`
     <div class="section">
       <section class="container">
         <div class="error_holder">
         <h2>Status code: ${status_code}</h2>
         <h3>Status message: ${status_message}</h3>
         </div>
       </section>
     </div>
   `);

   export const renderNoMovies = () => (`
   <div class="section">
     <section class="container">
       <div class="error_holder">
       <h2> There is no such movie! Try again.</h2>
       </div>
     </section>
   </div>
 `);
