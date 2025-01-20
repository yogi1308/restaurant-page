import restaurantImage from "./images-and-fonts/edited.png"
import cloud from "./images-and-fonts/noun-japan-cloud-6729222.svg";
import cloud2 from "./images-and-fonts/noun-cloud-5390848.svg";
import wave from "./images-and-fonts/4949956_94229.svg";

export default function loadMenu() {
  const content = document.querySelector('#content');
  content.textContent = ''; // Clear existing content

  const cloudDiv = document.createElement('div');
  cloudDiv.classList.add("cloudDiv")

  const backgroundCloud = document.createElement("img");
  backgroundCloud.src = cloud; // Set the source to the imported cloud SVG
  backgroundCloud.alt = "Cloud Background"; // Add alt text for accessibility
  backgroundCloud.classList.add("cloud-image"); // Add a class for styling (optional)

  cloudDiv.appendChild(backgroundCloud); // Append the cloud image to the content

  const backgroundCloud2 = document.createElement("img");
  backgroundCloud2.src = cloud2; // Set the source to the imported cloud SVG
  backgroundCloud2.alt = "Cloud Background2"; // Add alt text for accessibility
  backgroundCloud2.classList.add("cloud-image2"); // Add a class for styling (optional)

  cloudDiv.appendChild(backgroundCloud2); // Append the cloud image to the content

  const backgroundCloud3 = document.createElement("img");
  backgroundCloud3.src = cloud; // Set the source to the imported cloud SVG
  backgroundCloud3.alt = "Cloud Background3"; // Add alt text for accessibility
  backgroundCloud3.classList.add("cloud-image3"); // Add a class for styling (optional)

  cloudDiv.appendChild(backgroundCloud3); // Append the cloud image to the content

  // const backgroundCloud4 = document.createElement("img");
  // backgroundCloud4.src = cloud2; 
  // backgroundCloud4.alt = "Cloud Background4";
  // backgroundCloud4.classList.add("cloud-image4"); 

  // cloudDiv.appendChild(backgroundCloud4); 
  content.appendChild(cloudDiv)

  const waveSVG = document.createElement("img");
  waveSVG.src = wave; // Set the source to the imported cloud SVG
  waveSVG.alt = "waveSVG"; // Add alt text for accessibility
  waveSVG.classList.add("waveSVG"); // Add a class for styling (optional)

  content.appendChild(waveSVG); // Append the cloud image to the content

  const contentText = document.createElement('div');
  contentText.classList.add('contentText');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const menuItems = document.createElement('ul');

  const items = ['Signature Ramen', 'Toppings & Add-ons', 'Side Dishes', 'Beverages'];
  items.forEach((item) => {
    const menuCategory = document.createElement('li');
    menuCategory.classList.add('menuCategory')
    menuCategory.textContent = item;
    menuItems.appendChild(menuCategory);
  });
  

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('imageDiv');
  // imageDiv.style.background = `url(${restaurantImage})`;
  // imageDiv.style.justifySelf = 'stretch';
  // imageDiv.style.backgroundSize = 'cover';
  // imageDiv.style.backgroundPosition = 'center';
  const image = document.createElement('img');
  image.src = restaurantImage; // Replace with a valid image path
  image.alt = 'Restaurant';


  contentText.appendChild(headline);
  contentText.appendChild(menuItems)
  content.appendChild(contentText);
  imageDiv.appendChild(image);
  content.appendChild(imageDiv);
}
  