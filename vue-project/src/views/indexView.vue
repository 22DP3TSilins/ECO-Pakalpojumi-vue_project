<script>
// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');

// Load initial theme from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('.service, form, footer').forEach(el => el.classList.add('dark-mode'));
}

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.service, form, footer').forEach(el => el.classList.toggle('dark-mode'));
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
});

// Mobile Navigation
const menuButton = document.createElement('button');
menuButton.innerText = '☰';
menuButton.classList.add('menu-toggle');
document.querySelector('nav').prepend(menuButton);
menuButton.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Lazy Load Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Optionally clear the form
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
</script>

<template>
<body>
    <header>
        <div class="container">
            <h1>Eco Pakalpojumi</h1>
            <nav>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button id="themeToggle">Toggle Dark Mode</button>
        </div>
    </header>

    <section id="about" class="section">
        <div class="container">
            <h2>About Us</h2>
            <p>Welcome to Eco Pakalpojumi! We are dedicated to providing environmentally friendly services to make the world a better place. Our mission is to promote sustainability through our wide range of eco-friendly solutions.</p>
        </div>
    </section>

    <section id="services" class="section">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services">
                <div class="service">
                    <h3>Recycling Services</h3>
                    <p>We offer efficient recycling services to reduce waste and conserve resources.</p>
                </div>
                <div class="service">
                    <h3>Consulting</h3>
                    <p>Our experts provide guidance on sustainable practices for businesses and individuals.</p>
                </div>
                <div class="service">
                    <h3>Green Energy Solutions</h3>
                    <p>Discover our renewable energy solutions to power your home or business sustainably.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="section">
        <div class="container">
            <h2>Gallery</h2>
            <div class="gallery">
                <img src="images/project1.jpg" alt="Eco Project 1">
                <img src="images/project2.jpg" alt="Eco Project 2">
                <img src="images/project3.jpg" alt="Eco Project 3">
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <div class="container">
            <h2>Contact Us</h2>
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div id="map">
                <h3>Our Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.3342422913815!2d24.121035531793163!3d56.9604773160387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eeccf34567c0a5%3A0xc244b92bb2ddac4b!2sR%C4%ABgas%20Valsts%20Tehnikums!5e0!3m2!1sen!2slv!4v1614156986349!5m2!1sen!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Eco Pakalpojumi. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</template>

<style scoped>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

header {
    background: #2c7a7b;
    color: white;
    padding: 1rem 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
}

button#themeToggle {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: white;
    color: #2c7a7b;
    border: 2px solid #2c7a7b;
    border-radius: 5px;
    cursor: pointer;
}

button#themeToggle:hover {
    background: #2c7a7b;
    color: white;
}

/* Section Styles */
.section {
    padding: 2rem 0;
}

.section h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #2c7a7b;
}

.services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
}

.service {
    background: #f0f4f8;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.service h3 {
    margin-top: 0;
    color: #2c7a7b;
}

.service:hover {
    transform: scale(1.05);
}

/* Gallery Styles */
.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.gallery img {
    width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

/* Contact Form Styles */
form {
    max-width: 600px;
    margin: 0 auto;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background: #2c7a7b;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background: #225e5e;
}

/* Footer Styles */
footer {
    background: #2c7a7b;
    color: white;
    text-align: center;
    padding: 1rem 0;
}

/* Map Styles */
#map {
    margin-top: 2rem;
    text-align: center;
}

iframe {
    border: 0;
    border-radius: 8px;
    width: 100%;
    max-width: 800px;
    height: 450px;
}

</style>