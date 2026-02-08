document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    setTimeout(function() {
                        entry.target.classList.add('revealed');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

        revealElements.forEach(function(el) {
            observer.observe(el);
        });

        // Fallback: reveal any elements already scrolled past on page load
        setTimeout(function() {
            revealElements.forEach(function(el) {
                if (!el.classList.contains('revealed')) {
                    var rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        el.classList.add('revealed');
                    }
                }
            });
        }, 300);
    }
});
