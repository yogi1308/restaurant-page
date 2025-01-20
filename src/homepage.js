import restaurantImage from "./images-and-fonts/7031df6aded58282ed3a5f21936fab82.jpg"
import cloud from "./images-and-fonts/noun-japan-cloud-6729222.svg";
import cloud2 from "./images-and-fonts/noun-cloud-5390848.svg";
import wave from "./images-and-fonts/4949956_94229.svg";

export default function loadHome() {
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
  headline.textContent = 'Welcome to Ichiraku Ramen!';
  

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('imageDiv');
  // imageDiv.style.background = `url(${restaurantImage})`;
  // imageDiv.style.justifySelf = 'stretch';
  // imageDiv.style.backgroundSize = 'cover';
  // imageDiv.style.backgroundPosition = 'center';
  const image = document.createElement('img');
  image.src = restaurantImage; // Replace with a valid image path
  image.alt = 'Restaurant';

  const description = document.createElement('p');
  description.textContent = 'Ichiraku Ramen has been serving the finest bowls of ramen for years, blending tradition and innovation. Our warm, inviting space welcomes ramen lovers to savor the authentic flavors of Japan, inspired by our love for the art of cooking.';

  const visit = document.createElement('h1')
  visit.textContent = 'Why Ichiraku Ramen?'

  const visitDescription = document.createElement('p')
  visitDescription.textContent = 'Our ramen isn\'t just food; it\'s an experience. With high-quality ingredients, exceptional service, and a cozy atmosphere, we offer more than a meal — we bring people together. Our commitment to excellence has made us a beloved name among ramen enthusiasts.'

  contentText.appendChild(headline);
  contentText.appendChild(description);
  contentText.appendChild(visit)
  contentText.appendChild(visitDescription)
  content.appendChild(contentText);
  imageDiv.appendChild(image);
  content.appendChild(imageDiv);
}
  