// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js with PaperBold theme settings
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: 40,  // Reduced number of particles
                density: { enable: true, value_area: 800 } 
            },
            color: { value: "#03dac6" },
            shape: { type: "circle" },
            opacity: { 
                value: 0.3,  // More subtle opacity
                random: false 
            },
            size: { 
                value: 2,    // Smaller particles
                random: true 
            },
            line_linked: {
                enable: true,
                distance: 200,   // Increased distance between connections
                color: "#03dac6",
                opacity: 0.2,    // More subtle lines
                width: 1
            },
            move: {
                enable: true,
                speed: 2,        // Slower movement
                direction: "none",
                random: true,    // Random movement
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true,
                    mode: "grab"  // Changed to grab instead of repulse
                },
                onclick: { 
                    enable: false  // Disabled click interactions
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.4
                    }
                }
            }
        },
        retina_detect: true
    });

    // Initialize any elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});