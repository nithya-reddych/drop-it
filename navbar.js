document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    const navbarItem1 = document.createElement('div');
    navbarItem1.className = 'navbar-item';

    const logo = document.createElement('img');
    logo.src = 'https://via.placeholder.com/40';
    logo.alt = 'Drop It';

    const titleLink = document.createElement('a');
    titleLink.href = 'index.html';

    const title = document.createElement('h1');
    title.textContent = 'Drop It';
    title.style.color = 'white'; // Ensure the title text color is white
    title.style.textDecoration = 'none'; // Remove underline from link

    titleLink.appendChild(title);

    navbarItem1.appendChild(logo);
    navbarItem1.appendChild(titleLink); // Append the link with title

    const navbarItem2 = document.createElement('div');
    navbarItem2.className = 'navbar-item';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const allProductsDropdown = document.createElement('span');
    allProductsDropdown.className = 'all-products-dropdown';
    allProductsDropdown.innerHTML = 'All Categories <i class="fas fa-chevron-down" style="color: black;"></i>';

    const separator = document.createElement('span');
    separator.className = 'separator';
    separator.textContent = '|';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for Items...';

    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.className = 'search-button';
    searchButton.innerHTML = '<i class="fas fa-search"></i>';

    searchContainer.appendChild(allProductsDropdown);
    searchContainer.appendChild(separator);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);

    navbarItem2.appendChild(searchContainer);

    const navbarItem3 = document.createElement('div');
    navbarItem3.className = 'navbar-item';

    // wishlist
    const wishlistSection = document.createElement('div');
    wishlistSection.className = 'navbar-item';

    const wishlistIcon = document.createElement('i');
    wishlistIcon.className = "fa-regular fa-heart icon";

    const wishlistLink = document.createElement('a');
    wishlistLink.href = 'wishlist.html';
    wishlistLink.textContent = 'WishList';

    wishlistSection.appendChild(wishlistIcon);
    wishlistSection.appendChild(wishlistLink);

    // cart
    const cartSection = document.createElement('div');
    cartSection.className = 'navbar-item dropdown';

    const cartIcon = document.createElement('i');
    cartIcon.className = 'fas fa-shopping-cart icon';

    const cartLink = document.createElement('a');
    cartLink.textContent = 'My Cart';

    const dropdownIcon1 = document.createElement('i');
    dropdownIcon1.className = 'fas fa-chevron-down dropdown-icon';

    const cartDropdown = document.createElement('div');
    cartDropdown.className = 'dropdown-content';
    cartDropdown.innerHTML = '<a href="orders.php">My Orders</a><a href="checkout.html">Checkout</a>';

    cartSection.appendChild(cartIcon);
    cartSection.appendChild(cartLink);
    cartSection.appendChild(dropdownIcon1);
    cartSection.appendChild(cartDropdown);

    // signup
    const signupSection = document.createElement('div');
    signupSection.className = 'navbar-item dropdown';

    const signupIcon = document.createElement('i');
    signupIcon.className = 'fas fa-user icon';

    const signupLink = document.createElement('a');
    signupLink.textContent = 'Sign Up';

    const dropdownIcon2 = document.createElement('i');
    dropdownIcon2.className = 'fas fa-chevron-down dropdown-icon';

    const signupDropdown = document.createElement('div');
    signupDropdown.className = 'dropdown-content';
    signupDropdown.innerHTML = '<a href="profile.html">Profile</a><a href="login.html">Login</a>';

    signupSection.appendChild(signupIcon);
    signupSection.appendChild(signupLink);
    signupSection.appendChild(dropdownIcon2);
    signupSection.appendChild(signupDropdown);

    navbar.appendChild(navbarItem1);
    navbar.appendChild(navbarItem2);
    navbar.appendChild(navbarItem3);

    navbarItem3.appendChild(wishlistSection);
    navbarItem3.appendChild(cartSection);
    navbarItem3.appendChild(signupSection);
});
