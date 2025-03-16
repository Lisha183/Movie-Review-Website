const API_KEY = 'fd13946ff92096dbea97ee938350a03a';

// Function to Display Watchlist
async function displayWatchlist() {
    const watchlistContainer = document.getElementById("watchlist-container");
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (watchlist.length === 0) {
        watchlistContainer.innerHTML = "<p>Your watchlist is empty.</p>";
        return;
    }

    watchlist.forEach(async (movieId) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        const movie = await response.json();

        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;

        watchlistContainer.appendChild(movieItem);
    });
}

// Function to Display Ratings
function displayRatings() {
    const ratingsContainer = document.getElementById("ratings-container");
    let ratings = JSON.parse(localStorage.getItem("userRatings")) || {};

    if (Object.keys(ratings).length === 0) {
        ratingsContainer.innerHTML = "<p>No ratings yet.</p>";
        return;
    }

    Object.entries(ratings).forEach(([movieId, rating]) => {
        const ratingItem = document.createElement("p");
        ratingItem.textContent = `Movie ID ${movieId}: ${rating} ★`;
        ratingsContainer.appendChild(ratingItem);
    });
}

// Function to Display Reviews
function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    let reviews = JSON.parse(localStorage.getItem("userReviews")) || {};

    if (Object.keys(reviews).length === 0) {
        reviewsContainer.innerHTML = "<p>No reviews yet.</p>";
        return;
    }

    Object.entries(reviews).forEach(([movieId, review]) => {
        const reviewItem = document.createElement("p");
        reviewItem.textContent = `Movie ID ${movieId}: ${review}`;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Call all functions when page loads
displayWatchlist();
displayRatings();
displayReviews();

function saveUserRating(movieId, rating) {
    let ratings = JSON.parse(localStorage.getItem("userRatings")) || {};
    ratings[movieId] = rating;
    localStorage.setItem("userRatings", JSON.stringify(ratings));
}

function saveUserReview(movieId, reviewText) {
    let reviews = JSON.parse(localStorage.getItem("userReviews")) || {};
    reviews[movieId] = reviewText;
    localStorage.setItem("userReviews", JSON.stringify(reviews));
}
