// async function fetchMovieData(movieId) {
//     const apiKey = '741d57c85944e9649800e603e6051e69';
//     const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
// }

// async function fetchPopularMovies() {
//     const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             displayMovies(data.results);
//         })
//         .catch(error => {
//             console.error('Error fetching movies:', error);
//         });

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         // Display data on your website
//         const movieTitleElement = document.getElementById('movie-title');
//         if (movieTitleElement) {
//             movieTitleElement.textContent = data.title;
//         }
//     } catch (error) {
//         console.error('Fetch error:', error);
//         const errorMessageElement = document.getElementById('error-message');
//         if (errorMessageElement) {
//             errorMessageElement.textContent = 'Failed to fetch movie data.';
//         }
//     }
// }

// // Call the function:
// fetchMovieData(550);

// const movieContainer = document.getElementById('movie-container');

// function displayMovie(movieData) {
//     const movieCard = document.createElement('div');
//     movieCard.classList.add('movie-card');

//     const poster = document.createElement('img');
//     poster.src = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
//     poster.alt = movieData.title;
//     movieCard.appendChild(poster);

//     const title = document.createElement('h2');
//     title.textContent = movieData.title;
//     movieCard.appendChild(title);

//     // Add more elements as needed

//     movieContainer.appendChild(movieCard);
// }

// const apiKey = ' 741d57c85944e9649800e603e6051e69 '; // Replace with your API key

// function fetchPopularMovies() {
//     const url = `https://api.themoviedb.org/3/movie/popular?api_key=${741d57c85944e9649800e603e6051e69}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             displayMovies(data.results);
//         })
//         .catch(error => {
//             console.error('Error fetching movies:', error);
//         });
// }

// 

// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd13946ff92096dbea97ee938350a03a&page=1';
// const IMG_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fd13946ff92096dbea97ee938350a03a&query="'

// const form = document.getElementById('form');
// const search = document.getElementById('search')
// const main = document.getElementById('main');
// // get intial movies
// getMovies(API_URL)

// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()

//     console.log(data.results);
//     showMovies(data.results);
// }

// function showMovies(movies) {
//     main.innerHTML = '';
//     movies.forEach((movie) => {
//         // using object destructuring to get data
//         const { title, poster_path, vote_average, overview, release_date, } = movie;

//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');
//         movieElement.innerHTML = `
//         <a href="details.html?id=${movie.id}">
//         <img
//           src="${IMG_PATH + poster_path}"
//           alt="${title}"
//          </a>
    
//         <div class="movie-info">
//           <h3>${title}</h3>
//           <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//         </div>
//         <div class="release">
//          ${release_date}
//         </div>
//         <div class="overview">
//           <h3>Overview</h3>
//           ${overview}
//         </div>
//         `
//         main.appendChild(movieElement);
//     })
// }

// function getClassByRate(vote) {
//     if (vote >= 8) {
//         return 'green'
//     } else if (vote >= 5) {
//         return 'orange'
//     } else {
//         return 'red'
//     }
// }

// // Search Results
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const searcTerm = search.value;

//     if (searcTerm && searcTerm !== '') {
//         getMovies(SEARCH_API + searcTerm);
//         search.value = ''
//     } else {
//         window.location.reload();
//     }
// })

// function displayMovies(movies) {
//     const movieList = document.getElementById('movie-list');
//     movieList.innerHTML = ''; 

//     movies.forEach(movie => {
//         const movieCard = document.createElement('div');
//         movieCard.classList.add('movie-card');
//         movieCard.innerHTML = `
//             <a href="details.html?id=${movie.id}">
//                 <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
//             </a>
//             <h2>${movie.title}</h2>
//             <p>${movie.overview.substring(0, 150)}...</p>
//         `;
//         movieList.appendChild(movieCard);
//     });
// }

// function fetchMovieReviews() {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
        
//         const reviewsContainer = document.getElementById("reviews"); // Ensure you have this in HTML
//         reviewsContainer.innerHTML = ""; // Clear previous reviews

//         if (data.results.length === 0) {
//             reviewsContainer.innerHTML = "<p>No reviews available.</p>";
//             return;
//         }

//         // Limit to 5 reviews
//         const reviews = data.results.slice(0, 5);

//         reviews.forEach(review => {
//             const reviewElement = document.createElement("div");
//             reviewElement.classList.add("review");

//             reviewElement.innerHTML = `
//                 <h4>${review.author}</h4>
//                 <p>${review.content.length > 300 ? review.content.substring(0, 300) + "..." : review.content}</p>
//                 <small>Rating: ${review.author_details.rating || "N/A"}</small>
//             `;

//             reviewsContainer.appendChild(reviewElement);
//         });

//     } catch (error) {
//         console.error("Error fetching reviews:", error);
//     }
// }

// // Call the function when the page loads
// fetchMovieReviews();

// const API_KEY = 'fd13946ff92096dbea97ee938350a03a';
// const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
// const IMG_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

// const form = document.getElementById('form');
// const search = document.getElementById('search');
// const main = document.getElementById('main');

// // Ensure user is logged in before displaying movies
// document.addEventListener("DOMContentLoaded", () => {
//     if (!localStorage.getItem("currentUser")) {
//         window.location.href = "login.html"; // Redirect if not logged in
//     } else {
//         getMovies(API_URL);
//     }
// });

// // Fetch movies
// async function getMovies(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         showMovies(data.results);
//     } catch (error) {
//         console.error("Error fetching movies:", error);
//     }
// }

// // Display movies
// function showMovies(movies) {
//     main.innerHTML = '';
//     movies.forEach(movie => {
//         const { id, title, poster_path, vote_average, overview, release_date } = movie;

//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');
//         movieElement.innerHTML = `
//             <a href="details.html?id=${id}">
//                 <img src="${IMG_PATH + poster_path}" alt="${title}">
//             </a>
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="release">${release_date}</div>
//             <div class="overview">
//                 <h3>Overview</h3>
//                 ${overview}
//             </div>
//         `;
//         main.appendChild(movieElement);
//     });
// }

// // Color coding based on rating
// function getClassByRate(vote) {
//     if (vote >= 8) return 'green';
//     else if (vote >= 5) return 'orange';
//     else return 'red';
// }

// // Search functionality
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const searchTerm = search.value.trim();
//     if (searchTerm) {
//         getMovies(SEARCH_API + searchTerm);
//         search.value = '';
//     } else {
//         window.location.reload();
//     }
// });

// // Fetch movie details and reviews
// async function getMovieDetails() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const movieId = urlParams.get('id');

//     const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`);
//     const data = await response.json();

//     document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
//     document.getElementById("movie-title").textContent = data.title;
//     document.getElementById("movie-overview").textContent = data.overview;
//     document.getElementById("movie-rating").textContent = data.vote_average.toFixed(1);

//     // Display Genres
//     const genreList = document.getElementById("movie-genres");
//     genreList.innerHTML = "";
//     data.genres.forEach(genre => {
//         let li = document.createElement("li");
//         li.textContent = genre.name;
//         genreList.appendChild(li);
//     });

//     // Display Cast
//     const castContainer = document.getElementById("cast-container");
//     castContainer.innerHTML = "";
//     data.credits.cast.slice(0, 6).forEach(actor => {
//         if (actor.profile_path) {
//             const actorCard = document.createElement("div");
//             actorCard.classList.add("actor-card");
//             actorCard.innerHTML = `
//                 <img src="https://image.tmdb.org/t/p/w200${actor.profile_path}" alt="${actor.name}">
//                 <p>${actor.name}</p>
//             `;
//             castContainer.appendChild(actorCard);
//         }
//     });

//     // Display TMDB Reviews
//     fetchMovieReviews(movieId);

//     // Initialize User Watchlist & Reviews
//     setupWatchlist(movieId);
//     setupUserReviewSystem(movieId);
// }

// // Fetch Movie Reviews from TMDB
// async function fetchMovieReviews(movieId) {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const reviewsContainer = document.getElementById("reviews");
//         reviewsContainer.innerHTML = "";

//         if (!data.results || data.results.length === 0) {
//             reviewsContainer.innerHTML = "<p>No reviews available.</p>";
//             return;
//         }

//         data.results.slice(0, 5).forEach(review => {
//             const reviewElement = document.createElement("div");
//             reviewElement.classList.add("review");
//             reviewElement.innerHTML = `
//                 <h4>${review.author}</h4>
//                 <p>${review.content.length > 300 ? review.content.substring(0, 300) + "..." : review.content}</p>
//                 <small>Rating: ${review.author_details.rating || "N/A"}</small>
//             `;
//             reviewsContainer.appendChild(reviewElement);
//         });
//     } catch (error) {
//         console.error("Error fetching reviews:", error);
//     }
// }

// // Watchlist Feature
// function setupWatchlist(movieId) {
//     const watchlistBtn = document.getElementById("watchlist-btn");
//     let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

//     if (watchlist.includes(movieId)) {
//         watchlistBtn.textContent = "Remove from Watchlist";
//     }

//     watchlistBtn.addEventListener("click", () => {
//         if (watchlist.includes(movieId)) {
//             watchlist = watchlist.filter(id => id !== movieId);
//             watchlistBtn.textContent = "Add to Watchlist";
//         } else {
//             watchlist.push(movieId);
//             watchlistBtn.textContent = "Remove from Watchlist";
//         }
//         localStorage.setItem("watchlist", JSON.stringify(watchlist));
//     });
// }

// // User Ratings & Reviews
// function setupUserReviewSystem(movieId) {
//     const reviewInput = document.getElementById("review-text");
//     const submitReviewBtn = document.getElementById("submit-review");
//     const reviewsList = document.getElementById("reviews-list");
//     const ratingInput = document.getElementById("rating");

//     let reviews = JSON.parse(localStorage.getItem(`reviews-${movieId}`)) || [];

//     function displayUserReviews() {
//         reviewsList.innerHTML = "";
//         reviews.forEach(({ text, rating }) => {
//             let li = document.createElement("li");
//             li.innerHTML = `<strong>Rating: ${rating}/10</strong> - ${text}`;
//             reviewsList.appendChild(li);
//         });
//     }

//     submitReviewBtn.addEventListener("click", () => {
//         const reviewText = reviewInput.value.trim();
//         const rating = ratingInput.value;

//         if (reviewText && rating) {
//             reviews.push({ text: reviewText, rating });
//             localStorage.setItem(`reviews-${movieId}`, JSON.stringify(reviews));
//             reviewInput.value = "";
//             ratingInput.value = "";
//             displayUserReviews();
//         }
//     });

//     displayUserReviews();
// }

// // Initialize Functions
// document.addEventListener("DOMContentLoaded", getMovieDetails);



// const API_KEY = 'fd13946ff92096dbea97ee938350a03a';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
// const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;
// const GENRE_API = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
// const ACTOR_SEARCH_API = `${BASE_URL}/search/person?api_key=${API_KEY}&query=`;
// const DISCOVER_API = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

// const form = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const searchType = document.getElementById('search-type');
// const main = document.getElementById('main');

// // Store genres for easy access
// let genres = {};

// async function fetchGenres() {
//     try {
//         const res = await fetch(GENRE_API);
//         const data = await res.json();
//         data.genres.forEach(genre => {
//             genres[genre.name.toLowerCase()] = genre.id;
//         });
//     } catch (error) {
//         console.error("Error fetching genres:", error);
//     }
// }

// // Fetch genres on page load
// fetchGenres();

// // Handle search form submission
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const query = searchInput.value.trim();
//     const type = searchType.value;

//     if (!query) return;

//     if (type === "title") {
//         getMovies(SEARCH_API + query);
//     } else if (type === "genre") {
//         searchByGenre(query);
//     } else if (type === "actor") {
//         searchByActor(query);
//     }
// });

// // Fetch movies based on a URL
// async function getMovies(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         showMovies(data.results);
//     } catch (error) {
//         console.error("Error fetching movies:", error);
//     }
// }

// // Search movies by genre
// async function searchByGenre(query) {
//     const genreId = genres[query.toLowerCase()];
//     if (!genreId) {
//         main.innerHTML = "<p>Genre not found.</p>";
//         return;
//     }
//     const url = `${DISCOVER_API}&with_genres=${genreId}`;
//     getMovies(url);
// }

// // Search movies by actor
// async function searchByActor(query) {
//     try {
//         const res = await fetch(ACTOR_SEARCH_API + query);
//         const data = await res.json();

//         if (!data.results.length) {
//             main.innerHTML = "<p>Actor not found.</p>";
//             return;
//         }

//         const actorId = data.results[0].id;
//         const movieUrl = `${DISCOVER_API}&with_cast=${actorId}`;
//         getMovies(movieUrl);
//     } catch (error) {
//         console.error("Error fetching actor movies:", error);
//     }
// }

// // Display movie results
// function showMovies(movies) {
//     main.innerHTML = '';

//     if (!movies || movies.length === 0) {
//         main.innerHTML = "<p>No movies found.</p>";
//         return;
//     }

//     movies.forEach(movie => {
//         const { title, poster_path, vote_average, overview, id } = movie;

//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');
//         movieElement.innerHTML = `
//             <a href="details.html?id=${id}">
//                 <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/500'}" alt="${title}">
//             </a>
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="overview">
//                 <h3>Overview</h3>
//                 <p>${overview.length > 150 ? overview.substring(0, 150) + "..." : overview}</p>
//             </div>
//         `;
//         main.appendChild(movieElement);
//     });
// }

// // Assign color based on rating
// function getClassByRate(vote) {
//     if (vote >= 8) return 'green';
//     if (vote >= 5) return 'orange';
//     return 'red';
// }


// const API_KEY = 'fd13946ff92096dbea97ee938350a03a';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
// const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;
// const GENRE_API = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
// const ACTOR_SEARCH_API = `${BASE_URL}/search/person?api_key=${API_KEY}&query=`;
// const DISCOVER_API = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

// const form = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const searchType = document.getElementById('search-type');
// const main = document.getElementById('main');

// // Store genres for easy lookup
// let genres = {};

// // Fetch and store genres
// async function fetchGenres() {
//     try {
//         const res = await fetch(GENRE_API);
//         const data = await res.json();
        
//         data.genres.forEach(genre => {
//             genres[genre.name.toLowerCase()] = genre.id; // Store genres in lowercase for easy matching
//         });

//     } catch (error) {
//         console.error("Error fetching genres:", error);
//     }
// }

// // Fetch genres on page load
// fetchGenres();

// // Handle search form submission
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const query = searchInput.value.trim();
//     const type = searchType.value;

//     if (!query) return;

//     if (type === "title") {
//         getMovies(SEARCH_API + query);
//     } else if (type === "genre") {
//         searchByGenre(query);
//     } else if (type === "actor") {
//         searchByActor(query);
//     }
// });

// // Fetch movies based on a URL
// async function getMovies(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         showMovies(data.results);
//     } catch (error) {
//         console.error("Error fetching movies:", error);
//     }
// }

// // 🔹 Search by Genre
// async function searchByGenre(query) {
//     const genreId = genres[query.toLowerCase()];
    
//     if (!genreId) {
//         main.innerHTML = `<p style="color:red;">Genre not found. Try again.</p>`;
//         return;
//     }
    
//     const url = `${DISCOVER_API}&with_genres=${genreId}`;
//     getMovies(url);
// }

// // 🔹 Search by Actor
// async function searchByActor(query) {
//     try {
//         const res = await fetch(ACTOR_SEARCH_API + query);
//         const data = await res.json();

//         if (!data.results.length) {
//             main.innerHTML = `<p style="color:red;">Actor not found. Try again.</p>`;
//             return;
//         }

//         const actorId = data.results[0].id;
//         const movieUrl = `${DISCOVER_API}&with_cast=${actorId}`;
//         getMovies(movieUrl);
//     } catch (error) {
//         console.error("Error fetching actor movies:", error);
//     }
// }

// // 🔹 Display Movies
// function showMovies(movies) {
//     main.innerHTML = '';

//     if (!movies || movies.length === 0) {
//         main.innerHTML = "<p>No movies found.</p>";
//         return;
//     }

//     movies.forEach(movie => {
//         const { title, poster_path, vote_average, overview, id } = movie;

//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');
//         movieElement.innerHTML = `
//             <a href="details.html?id=${id}">
//                 <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/500'}" alt="${title}">
//             </a>
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="overview">
//                 <h3>Overview</h3>
//                 <p>${overview.length > 150 ? overview.substring(0, 150) + "..." : overview}</p>
//             </div>
//         `;
//         main.appendChild(movieElement);
//     });
// }

// // Assign color based on rating
// function getClassByRate(vote) {
//     if (vote >= 8) return 'green';
//     if (vote >= 5) return 'orange';
//     return 'red';
// }

const API_KEY = 'fd13946ff92096dbea97ee938350a03a';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const DISCOVER_API = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;
const GENRE_API = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
const ACTOR_SEARCH_API = `${BASE_URL}/search/person?api_key=${API_KEY}&query=`;

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchType = document.getElementById('search-type');
const main = document.getElementById('main');

let genres = {};

// Fetch genres
async function fetchGenres() {
    try {
        const res = await fetch(GENRE_API);
        const data = await res.json();
        data.genres.forEach(genre => {
            genres[genre.name.toLowerCase()] = genre.id;
        });
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}

// Fetch and display movies on homepage
async function getMovies(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// 🔹 Display movies
function showMovies(movies) {
    main.innerHTML = '';

    if (!movies || movies.length === 0) {
        main.innerHTML = "<p>No movies found.</p>";
        return;
    }

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview, id } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <a href="details.html?id=${id}">
                <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/500'}" alt="${title}">
            </a>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview.length > 150 ? overview.substring(0, 150) + "..." : overview}</p>
            </div>
        `;
        main.appendChild(movieElement);
    });
}

// Assign color based on rating
function getClassByRate(vote) {
    if (vote >= 8) return 'green';
    if (vote >= 5) return 'orange';
    return 'red';
}

// Search functionality
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    const type = searchType.value;

    if (!query) return;

    if (type === "title") {
        getMovies(SEARCH_API + query);
    } else if (type === "genre") {
        searchByGenre(query);
    } else if (type === "actor") {
        searchByActor(query);
    }
});

// 🔹 Search by Genre
async function searchByGenre(query) {
    const genreId = genres[query.toLowerCase()];
    
    if (!genreId) {
        main.innerHTML = `<p style="color:red;">Genre not found. Try again.</p>`;
        return;
    }
    
    const url = `${DISCOVER_API}&with_genres=${genreId}`;
    getMovies(url);
}

// 🔹 Search by Actor
async function searchByActor(query) {
    try {
        const res = await fetch(ACTOR_SEARCH_API + query);
        const data = await res.json();

        if (!data.results.length) {
            main.innerHTML = `<p style="color:red;">Actor not found. Try again.</p>`;
            return;
        }

        const actorId = data.results[0].id;
        const movieUrl = `${DISCOVER_API}&with_cast=${actorId}`;
        getMovies(movieUrl);
    } catch (error) {
        console.error("Error fetching actor movies:", error);
    }
}


   




// 🔹 Load popular movies on homepage
window.addEventListener('DOMContentLoaded', () => {
    fetchGenres();
    getMovies(DISCOVER_API); // ✅ Loads popular movies on home page
});
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const movies = document.querySelectorAll(".movie-card"); // Adjust if using a different class for movie results
    const carousel = document.getElementById("movie-carousel"); // Ensure this ID matches your carousel
    const moviesContainer = document.getElementById("movies-container"); // Update to match your movies list container
    const resultContainer = document.getElementById("search-results"); // A div where results or messages will be shown
    let hasResults = false;

    if (query === "") {
        // If search input is empty, show carousel and all movies
        if (carousel) carousel.style.display = "block";
        if (moviesContainer) moviesContainer.style.display = "block";
        movies.forEach(movie => movie.style.display = "block");
        resultContainer.innerHTML = "";
        return;
    }

    // Hide carousel when searching
    if (carousel) carousel.style.display = "none";

    // Filter movies based on search query
    movies.forEach(movie => {
        const title = movie.querySelector(".movie-title").textContent.toLowerCase(); // Adjust selector as needed
        if (title.includes(query)) {
            movie.style.display = "block";
            hasResults = true;
        } else {
            movie.style.display = "none";
        }
    });

    // If no movies match, show a message
    if (!hasResults) {
        resultContainer.innerHTML = "<p style='color: white; text-align: center;'>No results found.</p>";
    } else {
        resultContainer.innerHTML = "";
    }
});
