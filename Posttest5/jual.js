// Dark Mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change the icon based on the mode
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Input
const inputForm = document.getElementById('inputForm');
const resultDiv = document.getElementById('result');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah refresh halaman

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;

    // Menampilkan hasil inputan
    resultDiv.innerHTML = `
        <h3>Hasil Inputan:</h3>
        <p>Nama: ${name}</p>
        <p>Umur: ${age}</p>
        <p>Kata Sandi: ${password}</p>
    `;

    // Reset form
    inputForm.reset();
});
