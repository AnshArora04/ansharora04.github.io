// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any elements with fade-in class
    document.querySelectorAll('.fade-in').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
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
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    });

    // Update social links
    updateSocialLinks();

    // Populate projects
    populateProjects();

    // Populate timeline
    populateTimeline();
});

// Update social link hrefs
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-button');
    socialLinks.forEach(link => {
        const platform = link.href.split('#')[1];
        if (siteConfig.social[platform]) {
            link.href = siteConfig.social[platform];
        }
    });
}

// Populate project cards
function populateProjects() {
    const projectsContainer = document.querySelector('.project-cards');
    if (!projectsContainer) return;

    siteConfig.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.highlights ? `
                <ul class="highlights">
                    ${project.highlights.map(point => `<li>${point}</li>`).join('')}
                </ul>
            ` : ''}
            ${project.link ? `
                <a href="${project.link}" class="project-link" target="_blank">
                    View Project →
                </a>
            ` : ''}
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Populate timeline entries
function populateTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    siteConfig.timeline.forEach(entry => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';

        timelineItem.innerHTML = `
            <div class="timeline-content timeline-${entry.type}">
                <div class="timeline-header">
                    <h3 class="timeline-role">${entry.role}</h3>
                    <div class="timeline-meta">
                        <span class="location">${entry.location}</span> • 
                        <span class="organization">${entry.organization}</span> •
                        <span class="date">${entry.date}</span>
                    </div>
                </div>
                ${entry.points ? `
                    <ul class="timeline-points">
                        ${entry.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}