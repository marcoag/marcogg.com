let currentSearchTerm = '';

onload = function () {
   var e = document.getElementById('search-input');
   e.oninput = changeHandler;
   e.onpropertychange = e.oninput; // for IE8
    document.getElementById('search-input').addEventListener('keyup', handleKeyPress);
};

function changeHandler(e) {
    currentSearchTerm = e.target.value;
}

function handleKeyPress(e) {
    if (e && e.key === 'Enter') {
        handleSubmit();
    }
}

function handleSubmit() {
    window.open('https://www.google.com/search?q=site:' + window.location.hostname + ' ' + currentSearchTerm);
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerMenu = document.getElementById('burger-menu');
    
    mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerMenu = document.getElementById('burger-menu');
    
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerMenu = document.getElementById('burger-menu');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Close mobile menu on window resize if open
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});