// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    const particles = new Particles('.background', {
        selector: '.background',
        maxParticles: 100,
        sizeVariations: 3,
        speed: 0.5,
        color: '#ffffff',
        minDistance: 120,
        connectParticles: true
    });

    // Initialize any elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});