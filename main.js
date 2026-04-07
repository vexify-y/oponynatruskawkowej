/*
 * Opony na Truskawkowej - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-btns a, .footer-logo, .btn-outline');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll Reveal Animation Basic Implementation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(el);
    });

    // Custom CSS for revealed elements
    const styleElem = document.createElement('style');
    styleElem.innerHTML = `
        .reveal.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleElem);

    // Navbar Scroll Background Change
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(15, 17, 21, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(15, 17, 21, 0.8)';
        }
    });

    // Form Handling Placeholder
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const originalButtonText = contactForm.querySelector('button').innerText;
            contactForm.querySelector('button').innerText = 'Wysyłanie...';
            
            // Artificial delay to simulate processing
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h3>Dziękujemy za wiadomość!</h3>
                        <p>Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
                        <button onclick="location.reload()" class="btn btn-outline" style="margin-top: 1.5rem;">Wyślij ponownie</button>
                    </div>
                `;
            }, 1500);
        });
    }
});
