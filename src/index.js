console.log("heyyyyyy")

import "./styles.css";
import loadHome from './homepage';
import loadMenu from './menu';
import loadContact from './contacts';

// Load the default homepage content
loadHome();

// Add event listeners for tab switching
document.getElementById('home').addEventListener('click', loadHome);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('contact').addEventListener('click', loadContact);
