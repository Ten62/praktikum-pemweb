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

// File Upload Handling
const fileForm = document.getElementById('fileForm');
const fileList = document.getElementById('fileList');

fileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    if (file) {
        const fileName = formatFileName(file.name);
        saveFile(file, fileName);
        displayFiles();
        fileForm.reset(); // Reset form setelah upload
    }
});

// Fungsi untuk menyimpan file (misalnya ke localStorage)
function saveFile(file, fileName) {
    const fileData = {
        name: fileName,
        content: URL.createObjectURL(file)  // Atau simpan di server
    };
    
    let files = JSON.parse(localStorage.getItem('files')) || [];
    files.push(fileData);
    localStorage.setItem('files', JSON.stringify(files));
}

// Fungsi untuk menampilkan list file
function displayFiles() {
    const files = JSON.parse(localStorage.getItem('files')) || [];
    fileList.innerHTML = ''; // Kosongkan daftar sebelum render ulang
    
    files.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.innerHTML = `
            <p>${file.name}</p>
            <button onclick="deleteFile(${index})">Hapus</button>
            <button onclick="downloadFile('${file.content}')">Unduh</button>
        `;
        fileList.appendChild(fileItem);
    });
}

// Fungsi untuk format penamaan file
function formatFileName(originalName) {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace(/:/g, '.');
    const fileExtension = originalName.split('.').pop();
    return `${formattedDate}.${fileExtension}`;
}

// Fungsi untuk menghapus file
function deleteFile(index) {
    let files = JSON.parse(localStorage.getItem('files')) || [];
    files.splice(index, 1);
    localStorage.setItem('files', JSON.stringify(files));
    displayFiles();
}

// Fungsi untuk mengunduh file
function downloadFile(fileURL) {
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = true;
    a.click();
}

// Panggil displayFiles saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', displayFiles);
