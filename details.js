

const API_KEY = 'fd13946ff92096dbea97ee938350a03a';
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Fetch Movie Details
async function getMovieDetails() {


        try {
            const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
            const data = await response.json();
            console.log("Full API Data:", data); // Debug: Log the entire response
            if (data.credits && data.credits.cast) {
                console.log("Cast Data exists.");
                displayCast(data.credits.cast);
            } else {
                console.error("No cast data found in the API response.");
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`);
    const data = await response.json();

    document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    document.getElementById("movie-title").textContent = data.title;
    document.getElementById("movie-overview").textContent = data.overview;
    document.getElementById("movie-rating").textContent = data.vote_average.toFixed(1);


    // Display Genres
    const genreList = document.getElementById("movie-genres");
    data.genres.forEach(genre => {
        let li = document.createElement("li");
        li.textContent = genre.name;
        genreList.appendChild(li);
    });
    

    //Cast
    function displayCast(cast) {
        console.log("Cast data:", cast);
    const castContainer = document.getElementById("cast-container");
    castContainer.innerHTML = ""; // Clear previous data

    // Show only the first 6 actors
    cast.slice(0, 3).forEach(actor => {
        if (actor.profile_path) {
            const actorCard = document.createElement("div");
            actorCard.classList.add("actor-card");
            actorCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${actor.profile_path}" alt="${actor.name}">
                <p>${actor.name}</p>
            `;
            castContainer.appendChild(actorCard);
        }
    });
}

    // Initialize Watchlist Button
    setupWatchlist();
}

// Watchlist Feature
function setupWatchlist() {
    const watchlistBtn = document.getElementById("watchlist-btn");
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (watchlist.includes(movieId)) {
        watchlistBtn.textContent = "Remove from Watchlist";
    }

    watchlistBtn.addEventListener("click", () => {
        if (watchlist.includes(movieId)) {
            watchlist = watchlist.filter(id => id !== movieId);
            watchlistBtn.textContent = "Add to Watchlist";
        } else {
            watchlist.push(movieId);
            watchlistBtn.textContent = "Remove from Watchlist";
        }
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    });
}

// User Reviews Feature
function setupReviews() {
    const reviewInput = document.getElementById("review-text");
    const submitReviewBtn = document.getElementById("submit-review");
    const reviewsList = document.getElementById("reviews-list");

    let reviews = JSON.parse(localStorage.getItem(`reviews-${movieId}`)) || [];

    function displayReviews() {
        reviewsList.innerHTML = "";
        reviews.forEach(review => {
            let li = document.createElement("li");
            li.textContent = review;
            reviewsList.appendChild(li);
        });
    }

    submitReviewBtn.addEventListener("click", () => {
        const reviewText = reviewInput.value.trim();
        if (reviewText) {
            reviews.push(reviewText);
            localStorage.setItem(`reviews-${movieId}`, JSON.stringify(reviews));
            reviewInput.value = "";
            displayReviews();
        }
    });

    displayReviews();
}

// Initialize Functions
getMovieDetails();
setupReviews();



// Fetch Movie Reviews
async function fetchMovieReviews() {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Reviews API Response:", data); // Debugging: See if API returns data

        const reviewsContainer = document.getElementById("reviews");
        if (!reviewsContainer) {
            console.error("Error: #reviews div not found in HTML.");
            return;
        }

        reviewsContainer.innerHTML = ""; // Clear previous reviews

        if (!data.results || data.results.length === 0) {
            reviewsContainer.innerHTML = "<p>No reviews available.</p>";
            return;
        }

        // Display up to 5 reviews
        data.results.slice(0, 5).forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
                <h4>${review.author}</h4>
                <p>${review.content.length > 300 ? review.content.substring(0, 300) + "..." : review.content}</p>
                <small>Rating: ${review.author_details.rating || "N/A"}</small>
//             `;

            reviewsContainer.appendChild(reviewElement);
        });

    } catch (error) {
        console.error("Error fetching reviews:", error);
    }
}

// Run fetchMovieReviews() after page loads
window.onload = () => {
    fetchMovieReviews();
};

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingMessage = document.getElementById("rating-message");

    const savedRating = localStorage.getItem(`movie-rating-${movieId}`);
    if (savedRating) {
        highlightStars(savedRating);
        ratingMessage.textContent = `You rated this movie ${savedRating} stars!`;
    }

    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = this.getAttribute("data-value");
            localStorage.setItem(`movie-rating-${movieId}`, rating);
            highlightStars(rating);
            ratingMessage.textContent = `You rated this movie ${rating} stars!`;
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "gray";
        });
    }
});

