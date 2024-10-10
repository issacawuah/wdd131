const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temple objects
  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia, United States",
    dedicated: "1983, June, 1",
    area: 125000,
    imageUrl: " https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  // {
  //   templeName: "Sao Paulo Brazil",
  //   location: "Sao Paulo, Brazil",
  //   dedicated: "1978, April, 6",
  //   area: 100000,
  //   imageUrl: " https://midutahradio.com/wp-content/uploads/2023/10/Red-Cliffs-Temple-413x300.png"
  // },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: " https://t4.ftcdn.net/jpg/01/89/98/97/360_F_189989758_aKXl7s5XStBBCRGIuNmxcvukm5TlDSwd.jpg"
  }
];

// Function to create temple cards
function displayTemples() {
  const templeContainer = document.getElementById('temple-container');

  temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeContainer.appendChild(card);
  });
}

// Call the function to display temples
document.addEventListener('DOMContentLoaded', displayTemples);


 // Function to update the current date and time
function updateDateTime() {
  const currentYearElement = document.getElementById('currentyear');
  const currentTimeElement = document.getElementById('currenttime');
  
  const now = new Date();
  
  // Update year
  currentYearElement.textContent = `Year: ${now.getFullYear()}`;
  
  // Update time (HH:MM:SS format)
  currentTimeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', () => {
  
  // Existing function to display temples
  // displayTemples();  

  // Call to update date and time
  updateDateTime();  
});

//  Update time every second
setInterval(updateDateTime, 1000);

