document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================
       1. Dynamic Glassmorphic Navbar & Mobile Menu
       ====================================================================== */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { nav.classList.add('scrolled'); } 
        else { nav.classList.remove('scrolled'); }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    /* ======================================================================
       2. Scroll Reveal Animations
       ====================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ======================================================================
       3. Floating Particle Generator (Hero Section)
       ====================================================================== */
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 5 + 2; 
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particlesContainer.appendChild(particle);
        }
    }

    /* ======================================================================
       4. RAZORPAY INTEGRATION (Frontend Logic)
       ====================================================================== */
    const buyButton = document.getElementById('rzp-button1');
    
    if (buyButton) {
        buyButton.onclick = function (e) {
            e.preventDefault();

            // ⚠️ IMPORTANT: In a real app, you MUST generate an 'order_id' from your backend 
            // before showing this UI. This is purely the frontend UI flow.
            
            var options = {
                "key": "YOUR_RAZORPAY_KEY_ID_HERE", // Enter the Key ID generated from the Dashboard
                "amount": "19900", // Amount is in currency subunits (19900 paise = ₹199)
                "currency": "INR",
                "name": "ChetonaPublications",
                "description": "Complete ADRE Guide 2026 (PDF)",
                "image": "Cp.png",
                // "order_id": "order_9A33XWu170gUtm", // This MUST come from your backend!
                "handler": function (response) {
                    // This function runs when payment is successful!
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                    // Redirect the user to the PDF download page
                    window.location.href = "success-download-page.html";
                },
                "prefill": {
                    "name": "Student Name",
                    "email": "student@example.com",
                    "contact": "9999999999"
                },
                "theme": {
                    "color": "#00bcd4" // Matches your cyan brand color
                }
            };
            var rzp1 = new Razorpay(options);
            
            rzp1.on('payment.failed', function (response){
                    alert("Payment Failed. Reason: " + response.error.description);
            });

            rzp1.open();
        }
    }
});
