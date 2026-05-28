document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================
       Navbar Border on Scroll
       ====================================================================== */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { 
            nav.classList.add('scrolled'); 
        } else { 
            nav.classList.remove('scrolled'); 
        }
    });

    /* ======================================================================
       Mobile Hamburger Menu
       ====================================================================== */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    /* ======================================================================
       Smooth Scrolling for Top Links (Important for the Contact Button)
       ====================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '☰';
                }
                // Scroll to the section smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
