
export default function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = ''; // Clear existing content
  
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
  
    const menuItems = document.createElement('ul');
  
    const items = ['Pizza', 'Pasta', 'Salad', 'Desserts'];
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      menuItems.appendChild(listItem);
    });
  
    content.appendChild(headline);
    content.appendChild(menuItems);
  }
  