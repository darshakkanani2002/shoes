document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    function handleNavClick(event) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Function to dynamically change active design based on window scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const navLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight) {
                // Remove 'active' class from all navLinks
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the corresponding navLink
                navLink.classList.add('active');
            }
        });
    }

    // Initial call to setActiveLink to set the active link on page load
    setActiveLink();

    // Add event listener for scroll event to call setActiveLink on scroll
    window.addEventListener('scroll', setActiveLink);
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// back-to-top
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
