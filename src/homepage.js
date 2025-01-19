export default function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = ''; // Clear existing content
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
  
    // const image = document.createElement('img');
    // image.src = 'restaurant.jpg'; // Replace with a valid image path
    // image.alt = 'Restaurant';
  
    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest cuisine with a cozy atmosphere!';
  
    content.appendChild(headline);
    // content.appendChild(image);
    content.appendChild(description);
  }
  