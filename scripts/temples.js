const menuButton = document.querySelector("#menuButton");
const navList = document.querySelector(".nav-items ul");

menuButton.addEventListener("click", () => {
    // Toggle the menu visibility
    navList.classList.toggle("open");
    
    // Toggle button symbol ☰ <-> X
    if (navList.classList.contains("open")) {
        menuButton.textContent = "✖"; // X
    } else {
        menuButton.textContent = "☰"; // Hamburger
    }
});

// Footer Year and Last Modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;