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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "25, May, 2025",
    area: 17362,
    imageUrl:
    "images/abidjan.webp"
  },

  {
    templeName: "Okinawa Japan",
    location: "Okinawa Japan",
    dedicated: "12, November, 2023",
    area:  12437,
    imageUrl:
    "images/okinawa.webp"
  },

  {
    templeName: "Antofagasta Chile",
    location: "Antofagasta Chile",
    dedicated: "15, June, 2025",
    area:  26163,
    imageUrl: "images/antofagasta.webp"
  },


];

function createTempleCard(temple) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
  `;
  return card;
}

function filterTemples(criteria) {
  let filtered;
  switch(criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Hook up navigation filters
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("home");
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("old");
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("new");
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("large");
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("small");
});

// ADD THIS FUNCTION - it's completely missing from your code
function displayTemples(templesArray) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // Clear existing content
  
  templesArray.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// ADD THIS LINE to display temples when page loads
displayTemples(temples);

