// My_Project/js_files/script.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    // --- Course Content Loading for courses.html ---
    if (currentPage === 'courses.html') {
        const courseContentDiv = document.getElementById('courseContent');
        const coursePageHeading = document.getElementById('coursePageHeading');
        const courseTitleTag = document.getElementById('courseTitle');

        // Get the course name from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const courseName = urlParams.get('course'); // e.g., 'PLP', 'Software'

        if (courseName) {
            coursePageHeading.textContent = `${decodeURIComponent(courseName)} Course Details`;
            courseTitleTag.textContent = `${decodeURIComponent(courseName)} - My Courses`;
            let content = '';

            // Define content for each course
            switch (courseName) {
                case 'PLP':
                    content = `
                        <h3 class="text-2xl font-semibold text-blue-700 mb-4">Programming Logic & Principles</h3>
                        <p class="text-gray-700 mb-4">
                            This course introduces the fundamental concepts of programming logic and problem-solving.
                            You will learn about algorithms, flowcharts, pseudocode, and basic programming constructs
                            such as variables, data types, operators, control structures (if-else, loops), and functions.
                            It's the essential foundation for any aspiring programmer.
                        </p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>Introduction to Algorithms</li>
                            <li>Flowcharting and Pseudocode</li>
                            <li>Variables, Data Types, and Operators</li>
                            <li>Conditional Statements (if, else if, else)</li>
                            <li>Looping Constructs (for, while, do-while)</li>
                            <li>Functions and Modularity</li>
                            <li>Debugging Basics</li>
                        </ul>
                        <p class="text-gray-700">
                        <strong>Full course in telegram: <a href="https://t.me/c/2050798685/3807" class="text-blue-600 hover:underline">Click here for full Course</a></strong><br>
                            <strong>Instructor:</strong> Halefom Tesfay<br>
                            <strong>Duration:</strong> 8 Weeks<br>
                            <strong>Prerequisites:</strong> None
                        </p>
                    `;
                    break;
                case 'Software':
                    content = `
                        <h3 class="text-2xl font-semibold text-green-700 mb-4">Software Engineering</h3>
                        <p class="text-gray-700 mb-4">
                            Explore the systematic approach to designing, developing, and maintaining software.
                            This course covers software development life cycles (SDLC), requirements gathering,
                            design principles, testing methodologies, and project management techniques.
                        </p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>Software Development Life Cycles (Waterfall, Agile, Scrum)</li>
                            <li>Requirements Engineering</li>
                            <li>Software Design Principles (UML, Design Patterns)</li>
                            <li>Software Testing (Unit, Integration, System, Acceptance)</li>
                            <li>Version Control Systems (Git)</li>
                            <li>Software Project Management</li>
                        </ul>
                        <p class="text-gray-700">
                        <strong>Full course in telegram: <a href="https://t.me/c/2050798685/3804" class="text-blue-600 hover:underline">Click here for full Guide</a></strong><br>
                            <strong>Instructor:</strong> Silas Gebretsadik<br>
                            <strong>Duration:</strong> 10 Weeks<br>
                            <strong>Prerequisites:</strong> Basic Programming Knowledge
                        </p>
                    `;
                    break;
                case 'ADMS':
                    content = `
                        <h3 class="text-2xl font-semibold text-purple-700 mb-4">Advanced Database Management Systems</h3>
                        <p class="text-gray-700 mb-4">
                            Delve deeper into database concepts, including advanced SQL, database normalization,
                            transaction management, concurrency control, and database security. You'll also
                            touch upon NoSQL databases and data warehousing.
                        </p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>Advanced SQL Queries and Optimization</li>
                            <li>Database Normalization and Denormalization</li>
                            <li>Transaction Management and ACID Properties</li>
                            <li>Concurrency Control and Deadlock Handling</li>
                            <li>Database Security and Recovery</li>
                            <li>Introduction to NoSQL Databases</li>
                            <li>Data Warehousing and OLAP</li>
                        </ul>
                        <p class="text-gray-700">
                        <strong>Full course in telegram: <a href="https://t.me/c/2050798685/3808" class="text-blue-600 hover:underline">Click here for full Guide</a></strong><br>
                            <strong>Instructor:</strong> Mezgebo Mehari<br>
                            <strong>Duration:</strong> 9 Weeks<br>
                            <strong>Prerequisites:</strong> Introduction to Databases
                        </p>
                    `;
                    break;
                case 'DataComm':
                    content = `
                        <h3 class="text-2xl font-semibold text-red-700 mb-4">Data Communication & Networking</h3>
                        <p class="text-gray-700 mb-4">
                            Understand the principles and technologies behind data communication and computer networks.
                            Topics include network models (OSI, TCP/IP), network topologies, transmission media,
                            routing, switching, and network security fundamentals.
                        </p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>Network Models (OSI and TCP/IP)</li>
                            <li>Network Topologies and Devices</li>
                            <li>Transmission Media and Signal Encoding</li>
                            <li>Error Detection and Correction</li>
                            <li>Routing and Switching Protocols</li>
                            <li>IP Addressing and Subnetting</li>
                            <li>Network Security Fundamentals</li>
                        </ul>
                        <p class="text-gray-700">
                        <strong>Full course in telegram: <a href="https://t.me/c/2050798685/3805" class="text-blue-600 hover:underline">Click here for full Guide</a></strong><br>
                            <strong>Instructor:</strong> Hailemikael Haieleslase<br>
                            <strong>Duration:</strong> 8 Weeks<br>
                            <strong>Prerequisites:</strong> Basic Computer Literacy
                        </p>
                    `;
                    break;
                case 'WebDesign':
                    content = `
                        <h3 class="text-2xl font-semibold text-yellow-700 mb-4">Web Design & Development</h3>
                        <p class="text-gray-700 mb-4">
                            Learn to create dynamic and interactive web pages using modern web technologies.
                            This course covers HTML5 for structure, CSS3 for styling, and JavaScript for interactivity,
                            including responsive design principles and basic front-end frameworks.
                        </p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>HTML5 Structure and Semantics</li>
                            <li>CSS3 Styling and Layout (Flexbox, Grid)</li>
                            <li>Responsive Web Design</li>
                            <li>JavaScript Fundamentals (DOM Manipulation, Events)</li>
                            <li>Introduction to Front-end Frameworks (e.g., Tailwind CSS)</li>
                            <li>Web Hosting and Deployment Basics</li>
                        </ul>
                        <p class="text-gray-700">
                        <strong>Full course in telegram: <a href="https://t.me/c/2050798685/3804" class="text-blue-600 hover:underline">Click here for full module</a></strong><br>
                            <strong>Instructor:</strong> Berhane Tesfu<br>
                            <strong>Duration:</strong> 10 Weeks<br>
                            <strong>Prerequisites:</strong> None
                        </p>
                    `;
                    break;
                default:
                    content = `
                        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Course Not Found</h3>
                        <p class="text-gray-700">
                            The course you are looking for does not exist or the link is incorrect.
                            Please return to the <a href="index.html" class="text-blue-600 hover:underline">Home page</a>
                            to select a valid course.
                        </p>
                    `;
            }
            courseContentDiv.innerHTML = content;
        } else {
            coursePageHeading.textContent = 'Select a Course';
            courseTitleTag.textContent = 'Courses - My Courses';
            // Default content already in courses.html if no course is selected
        }
    }
});
