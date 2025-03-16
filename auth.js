document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (username) {
        localStorage.setItem("currentUser", username);
        document.getElementById("auth-message").textContent = `Welcome, ${username}! Redirecting...`;
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to homepage
        }, 1000);
    } else {
        alert("Please enter a username.");
    }
});
// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        alert("You need to log in first!");
        window.location.href = "login.html"; // Redirect to login page
    }
}

// Call this function when user tries to interact
document.getElementById("watchlist-btn").addEventListener("click", () => {
    checkAuth(); // Ensure user is logged in before adding to watchlist
    addToWatchlist();
});

document.getElementById("submit-review").addEventListener("click", () => {
    checkAuth(); // Ensure user is logged in before submitting a review
    submitReview();
});

document.getElementById("rate-movie-btn").addEventListener("click", () => {
    checkAuth(); // Ensure user is logged in before rating a movie
    rateMovie();
});
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("currentUser");
    if (user) {
        document.body.insertAdjacentHTML("afterbegin", `<h2>Welcome, ${user}!</h2>`);
    } else {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
});
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html"; // Redirect to login page
});
