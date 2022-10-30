import { convertDate, calculatePopularity, generateImageUrl} from "./utils";

export const renderMovie = ({id, title, poster_path,original_title, vote_average, release_date}) => (`
        <div class="movie">
            <a href="#movieId=${id}" >
                <img class="movie__photo photo " src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
            </a>
            <a class="movie__title">${original_title}</a>
            <span class="movie__popularity">${calculatePopularity(vote_average)}</span>
            <p class="movie__date">${convertDate(release_date)}</p>
        </div>
       `)


export const renderMovies = (movies, title) => (`
  <div class="container">
    <section>
      <h2 class="name-part">${title}</h2>
      <div class="section popular__section">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);