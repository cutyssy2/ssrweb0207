document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });

    // Text animation setup
    const textContainer = document.getElementById('text-container');
    const rows = 6;
    const text = 'System Security Research';

    // Create text rows
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'text-row';
        row.innerHTML = `<span class="text-item">${text}</span>`;
        textContainer.appendChild(row);
    }

    // Animate rows
    const textRows = document.querySelectorAll('.text-row');
    textRows.forEach((row, index) => {
        // Initial entrance animation
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';

            // Continuous sliding animation
            const direction = index % 2 === 0 ? 1 : -1;
            let position = 0;
            let currentDirection = direction;

            function slide() {
                position += currentDirection * 0.35;
                const containerWidth = textContainer.offsetWidth;
                const textWidth = row.offsetWidth;
                const maxOffset = (containerWidth - textWidth) / 2;

                // Keep text within container bounds
                if (position > maxOffset) {
                    position = maxOffset;
                    currentDirection *= -1;
                } else if (position < -maxOffset) {
                    position = -maxOffset;
                    currentDirection *= -1;
                }
                
                row.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(slide);
            }

            setTimeout(() => {
                row.style.transition = 'transform 0.05s linear';
                slide();
            }, 800);
        }, index * 150);
    });

    // Page transitions
    const pageTransition = document.getElementById('page-transition');
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('http')) {
                e.preventDefault();
                pageTransition.style.opacity = '1';
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Initial page transition
    pageTransition.style.opacity = '1';
    setTimeout(() => {
        pageTransition.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        pageTransition.style.opacity = '0';
    }, 50);
});
