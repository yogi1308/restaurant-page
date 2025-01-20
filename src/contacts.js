
export default function loadContact() {
    const content = document.querySelector('#content');
    content.textContent = ''; // Clear existing content
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: contact@restaurant.com | Phone: 123-456-7890';
  
    content.appendChild(headline);
    content.appendChild(contactInfo);
  }
  