// Simulated database
const simulatedDB = {
    users: [],
    teachers: {
        "Web Design": ["Ir, Abrham"],
        "Software Engineering": ["Dr. Sillas"],
        "Data Communication": ["Dr. Leozardeo"],
        "ADBS": ["Ir, Mezgebo"],
        "PLP": ["Ir, Halefom"]
    }
};

// Signup Form Handling
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const f_name = document.getElementById('f_name').value;
        const l_name = document.getElementById('l_name').value;
        const email = document.getElementById('email').value;
        const regYear = document.getElementById('regYear').value;
        const studentId = document.getElementById('studentId').value;
        const password = document.getElementById('password').value;
        const c_password=document.getElementById('c_password').value;
        
        document.querySelector('.great').addEventListener('click', function() {
        if(password===c_password){
        document.getElementsByClassName("great");
        }
        else{
            alert("re-enter the passowrd correctly!!")
            // document.getElementsByClassName("sign");
        }
    });
        // Generate MIT ID
        const mitId = `mit/ur${studentId}/${regYear}`;
        
        // Create user object
        const newUser = {
            id: mitId,
            password: password, // In real app, this would be hashed
            name: f_name + l_name,
            email: email,
            year: 2000 + parseInt(regYear), // Convert to full year
            courses: []
        };
        
        // Add to simulated database
        simulatedDB.users.push(newUser);
        
        // Store in localStorage (simulating database)
        localStorage.setItem('simulatedDB', JSON.stringify(simulatedDB));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        alert(`Registration successful! Your MIT ID is: ${mitId}`);
        window.location.href = 'dashboard.html';
    });
}

// Login Form Handling
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userId = document.getElementById('userId').value;
        const password = document.getElementById('loginPassword').value;
        
        // Retrieve from localStorage
        const db = JSON.parse(localStorage.getItem('simulatedDB')) || simulatedDB;
        
        // Find user
        const user = db.users.find(u => u.id === userId && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid MIT ID or password');
        }
    });
}

// Check if user is logged in on other pages
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard.html')) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!user) {
            window.location.href = 'login.html';
        } else {
            // Display user info
            document.getElementById('userWelcome').textContent = `Welcome, ${user.name}`;
            document.getElementById('userIdDisplay').textContent = user.id;
            
            // Display courses and teachers (simplified)
            const coursesList = document.getElementById('coursesList');
            Object.entries(simulatedDB.teachers).forEach(([course, teachers]) => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${course}</strong>: ${teachers.join(', ')}`;
                coursesList.appendChild(li);
            });
        }
    }
});