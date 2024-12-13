// Select the button and menu
const menuButton = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');

// Add click event listener
menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');
    
    // Toggle icon
    const icon = menuButton.querySelector('i');
    if (menuItems.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});
