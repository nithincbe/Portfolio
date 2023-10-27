
// JavaScript for making the navigation menu responsive
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

const navIcon = document.querySelector('#nav-icon');
navIcon.addEventListener('click', toggleNav);

// JavaScript for smooth scrolling to anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetSection.offsetTop - 50, // Adjust this value as needed
            });

            // Close the navigation menu on mobile devices
            const nav = document.querySelector('nav ul');
            nav.classList.remove('active');
        }
    });
});

// JavaScript for rotating the header image
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseenter', function() {
    this.style.transform = 'rotate(300deg)';
});
headerImg.addEventListener('mouseleave', function() {
    this.style.transform = 'rotate(300deg)';
});
