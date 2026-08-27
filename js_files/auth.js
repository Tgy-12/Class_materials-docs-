// My_Project/js_files/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    console.log(`[auth.js] Current page: ${currentPage}`);

    // --- Registration Logic ---
    if (currentPage === 'Register.html') {
        const registerForm = document.getElementById('registerForm');
        const messageElement = document.getElementById('message');

        if (registerForm) {
            console.log('[auth.js] Register form found, attaching listener.');
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission

                const fullName = registerForm.fullName.value.trim();
                const email = registerForm.email.value.trim();
                const username = registerForm.username.value.trim();
                const password = registerForm.password.value;
                const confirmPassword = registerForm.confirmPassword.value;

                console.log('[auth.js] Registration attempt:', { username, email });

                // Basic validation
                if (!fullName || !email || !username || !password || !confirmPassword) {
                    messageElement.textContent = 'All fields are required.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Validation failed: Missing fields.');
                    return;
                }
                if (username.length < 3) {
                    messageElement.textContent = 'Username must be at least 3 characters long.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Validation failed: Username too short.');
                    return;
                }
                if (password.length < 6) {
                    messageElement.textContent = 'Password must be at least 6 characters long.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Validation failed: Password too short.');
                    return;
                }
                if (password !== confirmPassword) {
                    messageElement.textContent = 'Passwords do not match.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Validation failed: Passwords mismatch.');
                    return;
                }
                if (!/\S+@\S+\.\S+/.test(email)) {
                    messageElement.textContent = 'Please enter a valid email address.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Validation failed: Invalid email format.');
                    return;
                }

                // Check if username already exists
                let users = JSON.parse(localStorage.getItem('users')) || {};
                console.log('[auth.js] Current users in localStorage:', users);

                if (users[username]) {
                    messageElement.textContent = 'Username already exists. Please choose a different one.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Registration failed: Username already exists.');
                    return;
                }

                // Store user data in localStorage
                users[username] = {
                    fullName: fullName,
                    email: email,
                    password: password
                };
                localStorage.setItem('users', JSON.stringify(users));
                console.log(`[auth.js] User '${username}' registered and saved to localStorage.`);

                messageElement.textContent = 'Registration successful! Redirecting to login...';
                messageElement.style.color = 'green';

                // Redirect to login page after a short delay
                setTimeout(() => {
                    console.log('[auth.js] Attempting redirection to log_in.html');
                    window.location.href = 'log_in.html';
                }, 1500); // Increased delay slightly
            });
        }
    }

    // --- Login Logic ---
    if (currentPage === 'log_in.html') {
        const loginForm = document.getElementById('loginForm');
        const messageElement = document.getElementById('message');

        if (loginForm) {
            console.log('[auth.js] Login form found, attaching listener.');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission

                const username = loginForm.username.value.trim();
                const password = loginForm.password.value;

                console.log('[auth.js] Login attempt for user:', username);

                let users = JSON.parse(localStorage.getItem('users')) || {};
                const userData = users[username];
                console.log('[auth.js] Retrieved user data:', userData ? 'exists' : 'does not exist');

                if (userData && userData.password === password) {
                    // Set a session flag in localStorage to indicate user is logged in
                    localStorage.setItem('loggedInUser', username);
                    console.log(`[auth.js] Login successful for user: ${username}. 'loggedInUser' set.`);

                    messageElement.textContent = 'Login successful! Redirecting to home...';
                    messageElement.style.color = 'green';

                    // Redirect to home page
                    setTimeout(() => {
                        console.log('[auth.js] Attempting redirection to index.html');
                        window.location.href = 'index.html';
                    }, 1500); // Increased delay slightly
                } else {
                    messageElement.textContent = 'Invalid username or password.';
                    messageElement.style.color = 'red';
                    console.log('[auth.js] Login failed: Invalid credentials.');
                }
            });
        }
    }

    // --- Login Status Check and Redirection for Protected Pages ---
    function checkLoginStatus() {
        const protectedPages = ['index.html', 'courses.html', 'contact.html'];

        if (protectedPages.includes(currentPage)) {
            const loggedInUser = localStorage.getItem('loggedInUser');
            console.log(`[auth.js] Checking login status for protected page '${currentPage}'. LoggedInUser: ${loggedInUser}`);

            if (!loggedInUser) {
                console.log('[auth.js] User not logged in. Redirecting to log_in.html.');
                // Redirect immediately if not logged in
                window.location.href = 'log_in.html';
            } else {
                console.log(`[auth.js] User '${loggedInUser}' is logged in.`);
            }
        }
    }

    // Call checkLoginStatus on every page load (except login/register forms themselves)
    // This runs once DOM is loaded.
    if (!['Register.html', 'log_in.html'].includes(currentPage)) {
        checkLoginStatus();
    }
});
