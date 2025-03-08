// Add smooth reveal animations when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const projectItems = document.querySelectorAll('.project-item');

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Initialize cards with opacity 0 and translate
    cards.forEach(card => {
        if (!card.classList.contains('intro-card')) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        }
    });

    // Initialize project items with opacity 0 and translate
    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Make sure intro card is visible immediately
    const introCard = document.querySelector('.intro-card');
    if (introCard) {
        introCard.style.opacity = '1';
        introCard.style.transform = 'none';
    }

    // Add glitch effect to title on hover
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        glitchText.addEventListener('mouseover', () => {
            glitchText.style.animation = 'glitch 1s infinite';
        });

        glitchText.addEventListener('mouseout', () => {
            glitchText.style.animation = 'none';
        });
    }
});

// Mouse move parallax effect for background
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background-animation');
    
    // Calculate movement based on mouse position
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Move background (slower movement)
    background.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
});

// Particles.js Configuration
const particleConfigs = {
    home: {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 1000 } },
            color: { value: ['#00ffff', '#2d00f7', '#ff0080'] },
            shape: { type: 'circle' },
            opacity: {
                value: 0.6,
                random: true,
                anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 1, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ffff',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: { enable: true, mode: ['grab', 'bubble'] },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 0.8 } },
                bubble: { distance: 250, size: 6, duration: 2, opacity: 0.8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        }
    },
    projects: {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ['#00ffff', '#ff0080'] },
            shape: {
                type: ['circle', 'triangle'],
                stroke: { width: 1, color: '#00ffff' }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 4,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'top',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'bubble' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 }
            }
        }
    },
    blog: {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: '#00ffff' },
            shape: {
                type: 'polygon',
                stroke: { width: 1, color: '#00ffff' },
                polygon: { nb_sides: 6 }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 5,
                random: true,
                anim: { enable: true, speed: 1, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#00ffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: { enable: true, mode: 'connect' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                connect: { distance: 200, line_linked: { opacity: 0.5 }, radius: 150 },
                push: { particles_nb: 2 }
            }
        }
    }
};

// Initialize particles based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    let config;

    if (currentPath.includes('projects')) {
        config = particleConfigs.projects;
    } else if (currentPath.includes('blog')) {
        config = particleConfigs.blog;
    } else {
        config = particleConfigs.home;
    }

    // Add retina detect to all configs
    config.retina_detect = true;

    // Initialize particles
    particlesJS('particles-js', config);

    // Add smooth transition to particles canvas
    const particles = document.querySelector('#particles-js');
    if (particles) {
        particles.style.transition = 'transform 0.2s ease-out';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .intro-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Create page transition overlay
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Check if this is a page load from navigation
    const isFromNavigation = sessionStorage.getItem('isNavigating');
    if (isFromNavigation) {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.classList.remove('active', 'fade-out');
            }, 800);
        });
        sessionStorage.removeItem('isNavigating');
    } else {
        overlay.classList.add('initial-load');
    }

    // Handle all navigation links
    document.querySelectorAll('a').forEach(link => {
        // Skip hash links (smooth scroll)
        if (link.getAttribute('href')?.startsWith('#')) return;
        
        link.addEventListener('click', (e) => {
            const isExternalLink = link.getAttribute('href')?.startsWith('http') || 
                                 link.getAttribute('target') === '_blank';
            
            // Don't handle external links
            if (isExternalLink) return;
            
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Set navigation state
            sessionStorage.setItem('isNavigating', 'true');
            
            // Start transition
            const container = document.querySelector('.container');
            container.classList.add('fade-out');
            overlay.classList.add('active');
            
            // Navigate after transition
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Handle back/forward browser navigation
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            overlay.classList.add('active', 'fade-out');
            setTimeout(() => {
                overlay.classList.remove('active', 'fade-out');
            }, 800);
            
            const container = document.querySelector('.container');
            container.classList.remove('fade-out');
        }
    });
}); 