// document.getElementById("login-btn").addEventListener("click", () => {
//     const username = document.getElementById("username").value.trim();

//     if (username) {
//         localStorage.setItem("currentUser", username);
//         document.getElementById("auth-message").textContent = `Welcome, ${username}! Redirecting...`;
//         setTimeout(() => {
//             window.location.href = "index.html"; // Redirect to homepage
//         }, 1000);
//     } else {
//         alert("Please enter a username.");
//     }
// });
// // Check if user is logged in
// function checkAuth() {
//     const user = localStorage.getItem("currentUser");
//     if (!user) {
//         alert("You need to log in first!");
//         window.location.href = "login.html"; // Redirect to login page
//     }
// }

// // Call this function when user tries to interact
// document.getElementById("watchlist-btn").addEventListener("click", () => {
//     checkAuth(); // Ensure user is logged in before adding to watchlist
//     addToWatchlist();
// });

// document.getElementById("submit-review").addEventListener("click", () => {
//     checkAuth(); // Ensure user is logged in before submitting a review
//     submitReview();
// });

// document.getElementById("rate-movie-btn").addEventListener("click", () => {
//     checkAuth(); // Ensure user is logged in before rating a movie
//     rateMovie();
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const user = localStorage.getItem("currentUser");
//     if (user) {
//         document.body.insertAdjacentHTML("afterbegin", `<h2>Welcome, ${user}!</h2>`);
//     } else {
//         window.location.href = "login.html"; // Redirect to login page if not logged in
//     }
// });
// document.getElementById("logout-btn").addEventListener("click", () => {
//     localStorage.removeItem("currentUser");
//     window.location.href = "login.html"; // Redirect to login page
// });

document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Retrieve existing users or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const existingUser = users.find(user => user.username === username && user.password === password);

    if (existingUser) {
        localStorage.setItem("currentUser", username); // Store the logged-in user
        document.getElementById("auth-message").textContent = `Welcome, ${username}! Redirecting...`;
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to homepage
        }, 1000);
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("signup-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter a username and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already taken. Please choose a different one.");
        return;
    }

    // Save new user
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! Please log in.");
});

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser"); // Remove current user
    window.location.href = "login.html"; // Redirect to login page
});

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem("currentUser");
    if (!user) {
        alert("You need to log in first!");
        window.location.href = "dashboard.html"; // Redirect to login page
    }
}

// Ensure users are authenticated before accessing pages
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("currentUser");
    if (user) {
        document.body.insertAdjacentHTML("afterbegin", `<h2>Welcome, ${user}!</h2>`);
    } else {
        window.location.href = "dashboard.html"; // Redirect to login page if not logged in
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("currentUser");
    const alertWrapper = document.getElementById("alertWrapper");
    const goBackBtn = document.getElementById("goBackBtn");
    // save user data to local storage
    signupBtn.onclick = function() {
        let name = document.querySelector("#username").value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
    
        let user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('User has been saved successfully');
        window.location.href = "index.html";
        user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('User not found.');
            return;
        }
    
        // Go back to the previous page when "Go Back" is clicked
        goBackBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.back();
        });
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        document.getElementById("alertWrapper").style.display = "none"; // Hide the alert
        document.body.classList.remove("blurred"); // Remove blur effect
    } else {
        document.getElementById("alertWrapper").style.display = "block"; // Show alert if not logged in
        document.body.classList.add("blurred"); // Apply blur effect
    }
});

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html"; // Redirect to login page
});
document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (username) {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("isLoggedIn", "true"); // Store login state
        document.getElementById("auth-message").textContent = `Welcome, ${username}! Redirecting...`;
        
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        }, 1000);
    } else {
        alert("Please enter a username.");
    }
});

