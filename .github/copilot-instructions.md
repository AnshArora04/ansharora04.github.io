# AI Assistant Instructions for ansharora04.github.io

## Project Overview

This is a personal website/portfolio built using the PaperBold Theme for LittleLink Custom. The site will be hosted at https://ansharora04.github.io.

## Repository Structure

The theme follows LittleLink Custom's structure:

```
.
├── config.php          # Theme configuration
├── skeleton-auto.css   # Main CSS framework based on Skeleton
├── animations.css      # Animation styles
├── brands.css         # Social media brand styles
├── share.button.css   # Share button styles
└── extra/            # Custom assets and components
    ├── custom-assets/   # JS, fonts, and other assets
    ├── custom-icons/    # Custom icon storage
    ├── custom-head.blade.php     # Custom code for <head>
    ├── custom-body.blade.php     # Custom code for <body>
    └── custom-body-end.blade.php # Custom code for end of <body>
```

## Theme Features

### Core Components

1. Base Framework:
   - Built on Skeleton CSS framework
   - Responsive grid system (max-width: 600px)
   - Mobile-first design with breakpoints at 400px and 550px

2. Visual Elements:
   - Particle.js background effects (via custom-head.blade.php)
   - Canvas background implementation (via custom-body.blade.php)
   - Custom animations and transitions
   - Hidden scrollbar implementation

3. Typography:
   - Roboto font with multiple weights and scripts
   - Comprehensive font loading for different character sets
   - Customizable font sizes and colors

### Customization System

1. Theme Configuration (config.php):
```php
return [
    'allow_custom_buttons' => 'false',
    'open_links_in_same_tab' => 'false',
    'enable_custom_code' => 'true',
    'use_custom_icons' => 'false'
];
```

2. Style Variables (skeleton-auto.css):
```css
:root {
    --font-family: 'Roboto', sans-serif;
    --font-size: 16px;
    --background-color: #fff;
    --title-color: #000;
    --button-background-color: #fff;
    /* etc. */
}
```

## Development Workflow

1. Local Development Requirements:
   - LittleLink Custom platform
   - PHP environment
   - Web server (Apache/Nginx)

2. Customization Process:
   - Modify config.php for behavioral changes
   - Update CSS variables for styling
   - Add custom assets to extra/custom-assets/
   - Modify Blade templates for layout changes

3. Asset Management:
   - Place custom icons in extra/custom-icons/
   - Add custom scripts to custom-body-end.blade.php
   - Manage font files in custom-assets/

## Key Integration Points

1. Core Dependencies:
   - Particles.js for background effects
   - jQuery for interactivity
   - Blade templating system

2. External Services:
   - Font loading system
   - Social media API integrations
   - Custom icon support

## Static Site Conversion Plan

### Phase 1: Project Setup
1. Create modular directory structure:
```
.
├── index.html          # Main HTML file
├── css/               # Stylesheets
│   ├── skeleton.css   # Base framework
│   ├── animations.css # Animations
│   ├── components/    # Component-specific styles
│   │   ├── cards.css    # Project card styles
│   │   ├── timeline.css # Timeline styles
│   │   └── social.css   # Social button styles
│   └── main.css      # Core styles and variables
├── js/               # JavaScript files
│   ├── lib/          # External libraries
│   │   ├── particles.min.js
│   │   └── jquery.min.js
│   ├── components/   # Component-specific logic
│   │   ├── timeline.js
│   │   └── cards.js
│   └── main.js       # Core functionality
├── data/             # Configuration files
│   ├── config.js     # Content configuration
│   └── theme.js      # Theme configuration
└── assets/           # Static assets
    ├── fonts/        # Roboto font files
    └── images/       # Images and icons
```

2. Dependencies to preserve:
   - Particles.js for background
   - jQuery (if needed)
   - Roboto font files
   - Custom animations

### Phase 2: HTML Structure
1. Create base HTML template:
   - Convert Blade templates to static HTML
   - Merge `custom-head`, `custom-body`, and `custom-body-end`
   - Set up proper meta tags and SEO elements

2. Component structure:
   - Header with profile info
   - Links/buttons section
   - Footer with credits
   - Background canvas for particles

### Phase 3: Asset Migration
1. CSS Migration:
   - Preserve CSS variables from skeleton-auto.css
   - Consolidate styles into organized files
   - Maintain responsive breakpoints
   - Keep animation definitions

2. JavaScript Setup:
   - Initialize particles.js
   - Configure background animations
   - Set up any interactive features

3. Asset Organization:
   - Optimize and compress images
   - Organize font files
   - Set up icon system

### Phase 4: Site Structure and Customization

1. Page Sections (in order):
   ```
   1. Header
      - Profile photo (if desired)
      - Name
      - Bio section (brief introduction)
   
   2. Projects/Research
      - Card layout for projects
      - Each card contains:
        - Project title
        - Description
        - Link (if applicable)
      - Clean, minimal design matching theme
   
   3. Resume & Contact
      - Interactive timeline display:
        ```html
        <div class="timeline">
          <!-- Project Entry -->
          <div class="timeline-item">
            <div class="timeline-content timeline-project">
              <div class="timeline-header">
                <h3 class="timeline-role">Project Name</h3>
                <div class="timeline-meta">
                  <span class="location">Location</span> • 
                  <span class="organization">Organization</span>
                </div>
              </div>
              <ul class="timeline-points">
                <li>Key achievement or responsibility</li>
                <li>Another key point</li>
              </ul>
              <a href="#project-link" class="timeline-link">View Project →</a>
            </div>
          </div>
          
          <!-- Work Experience Entry -->
          <div class="timeline-item">
            <div class="timeline-content timeline-work">
              <!-- Similar structure but without project link -->
            </div>
          </div>
          
          <!-- Education Entry -->
          <div class="timeline-item">
            <div class="timeline-content timeline-education">
              <!-- Similar structure -->
            </div>
          </div>
        </div>
        ```
      - Download Resume button (PDF)
      - Social links:
        - LinkedIn (icon + link)
        - Instagram (icon + link)
      - Contact information
   ```

2. Configuration System:
   ```js
   // data/config.js - Main configuration file
   const siteConfig = {
     // Basic Information
     title: "Your Name",
     bio: "Your Bio",
     resumeLink: "path/to/resume.pdf",
     
     // Social Links
     social: {
       linkedin: "your-linkedin-url",
       instagram: "your-instagram-url"
     },

     // Projects/Research (easily add/remove/edit)
     projects: [
       {
         title: "Project Name",
         description: "Project Description",
         link: "optional-link",
         highlights: [
           "Key point 1",
           "Key point 2"
         ]
       }
     ],

     // Timeline Entries (easily add/remove/edit)
     timeline: [
       {
         type: "work", // or "education" or "project"
         role: "Position Title",
         organization: "Company/Institution",
         location: "City, Country",
         date: "Period",
         points: [
           "Achievement 1",
           "Achievement 2"
         ],
         link: "optional-project-link"
       }
     ]
   };

   // data/theme.js - Separate theme configuration
   const themeConfig = {
     colors: {
       primary: "#03dac6",
       background: "#fff",
       text: "#000",
       buttons: "#f0f0f0",
       timeline: {
         work: "#2196F3",
         education: "#9C27B0",
         project: "#4CAF50"
       }
     },
     layout: {
       maxWidth: "600px",
       cardRadius: "14px",
       buttonHeight: "58px"
     }
   };
   ```

3. Dark Mode Implementation:
   ```css
   /* Simple dark mode using media query */
   @media (prefers-color-scheme: dark) {
     :root {
       --background-color: #1f232e;
       --title-color: #fff;
       --button-background-color: #222840;
       --button-text-color: #fff;
       --card-background: #2a2f3d;
       --timeline-color: #03dac6;
     }
   }
   ```

4. Social Icons Implementation:
   ```html
   <!-- Using standard Font Awesome icons -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
   
   <!-- Social links structure -->
   <div class="social-links">
     <a href="[linkedin-url]" class="button social-button">
       <i class="fab fa-linkedin"></i>
       LinkedIn
     </a>
     <a href="[instagram-url]" class="button social-button">
       <i class="fab fa-instagram"></i>
       Instagram
     </a>
   </div>
   ```

### Phase 5: Testing & Optimization
1. Test cases:
   - Mobile responsiveness
   - Animation performance
   - Asset loading
   - Cross-browser compatibility

2. Optimization:
   - Minimize CSS/JS
   - Optimize font loading
   - Compress images
   - Implement lazy loading

### Phase 6: GitHub Pages Deployment
1. Repository setup:
   - Organize files in main branch
   - Create proper .gitignore

2. GitHub Pages configuration:
   - Enable GitHub Pages
   - Configure custom domain (if needed)
   - Set up HTTPS

## Development and Testing Workflow

### Step-by-Step Development Process
1. Break down each major step into smaller, testable units
2. Complete one unit at a time
3. Test thoroughly before moving to the next unit
4. Document any issues or dependencies

### Testing Requirements for Each Step

1. Visual Components Testing:
   - Test in both light and dark modes
   - Verify all animations and transitions
   - Check responsive behavior at different breakpoints
   - Validate hover states and interactions

2. Functional Testing:
   - Test all interactive elements
   - Verify script loading and execution
   - Check for console errors
   - Validate performance impact

3. Cross-browser Testing:
   - Test in Chrome, Firefox, Safari
   - Verify mobile responsiveness
   - Check for rendering issues

4. Documentation Requirements:
   - List all changes made
   - Note any known issues
   - Document test results
   - Track dependencies between components

### Testing Checklist Template

```markdown
Step X: [Step Name]
Unit: [Current Unit Name]

1. Visual Verification:
   - [ ] Layout matches design
   - [ ] Animations work as expected
   - [ ] Responsive behavior correct
   - [ ] Dark/light mode working

2. Functional Verification:
   - [ ] All scripts loading
   - [ ] No console errors
   - [ ] Interactions working
   - [ ] Performance acceptable

3. Browser Compatibility:
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Mobile view

4. Issues and Notes:
   - Known issues:
   - Dependencies:
   - Follow-up tasks:

5. Sign-off:
   - [ ] Unit complete
   - [ ] Tests passed
   - [ ] Documentation updated
```

## Technical Specifications

### 1. Typography System
```css
/* Font Implementation */
@font-face {
  font-family: 'Roboto';
  src: url('assets/fonts/roboto-[weight]-[script].woff2') format('woff2'),
       url('assets/fonts/roboto-[weight]-[script].woff') format('woff');
  font-weight: [300,400,700];
  font-style: normal;
}

/* Base Typography */
:root {
  --font-family: 'Roboto', sans-serif;
  --font-size: 16px;
  --title-size: 2em;
  --description-size: 1.2em;
}
```

### 2. Button System
```css
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  border-radius: 14px;
  border: 1px solid black;
  box-shadow: 6px 4px 0px 5px #000000;
  transition-duration: 0.3s;
}

/* Icon Integration */
.icon {
  width: 20px;
  height: 20px;
  position: relative;
  right: 10px;
  bottom: 2px;
}
```

### 3. Particles.js Configuration
```javascript
{
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  }
}
```

### 4. Layout Specifications
```css
/* Container System */
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
}

/* Breakpoints */
@media (min-width: 400px) { .container { width: 85%; } }
@media (min-width: 550px) { .container { width: 80%; } }
```

### 5. Card & Timeline System
```css
/* Project Cards */
.project-card {
  background: var(--button-background-color);
  border-radius: 14px;
  border: 1px solid black;
  box-shadow: 6px 4px 0px 5px #000000;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Timeline System */
.timeline {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background: var(--timeline-color);
  top: 0;
  bottom: 0;
  left: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

/* Timeline dot */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -54px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--timeline-color);
  border: 2px solid var(--background-color);
}

.timeline-content {
  padding: 20px;
  background: var(--button-background-color);
  border-radius: 14px;
  border: 1px solid black;
  box-shadow: 6px 4px 0px 5px #000000;
}

/* Entry types */
.timeline-project {
  border-left: 3px solid #4CAF50;
}

.timeline-work {
  border-left: 3px solid #2196F3;
}

.timeline-education {
  border-left: 3px solid #9C27B0;
}

/* Content structure */
.timeline-header {
  margin-bottom: 10px;
}

.timeline-role {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
}

.timeline-meta {
  color: var(--button-text-color);
  font-size: 0.9em;
  margin: 5px 0;
}

.timeline-points {
  list-style-type: none;
  padding-left: 0;
}

.timeline-points li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.timeline-points li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--timeline-color);
}

.timeline-link {
  display: inline-block;
  margin-top: 10px;
  color: var(--timeline-color);
  text-decoration: none;
}

.timeline-link:hover {
  text-decoration: underline;
}
```

### 6. Animation System
```css
/* Button Hover */
.button-hover {
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.1s;
  transition-property: transform;
}
.button-hover:hover {
  transform: scale(1.02);
}

/* Footer Animation */
.footer-hover {
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease-out;
}
.footer-hover:hover {
  transform: translateY(-8px);
}
```

## Development Best Practices

1. Code Organization:
   - Maintain separate files for core CSS, animations, and brand styles
   - Use semantic HTML5 elements
   - Keep JavaScript modular with clear initialization
   - Document component interactions

2. Performance:
   - Preload critical fonts
   - Defer non-critical JavaScript
   - Optimize particle system for mobile
   - Use responsive images with srcset

3. Version Control:
   - Commit changes by feature
   - Document major style changes
   - Keep assets in their designated folders

4. Accessibility:
   - Maintain ARIA labels
   - Ensure keyboard navigation
   - Provide alt text for images
   - Support high contrast modes

---

## Version Control Guidelines

### Commit Message Format
Each step of the development process should be committed with a clear, structured message:

```
feat: Short description of feature

- Detailed bullet points of changes
- Additional context or changes

Part of static site conversion: Step X/6
```

### Commit Types
- feat: New features or major changes
- style: Style/UI changes
- fix: Bug fixes
- chore: Maintenance tasks
- docs: Documentation updates

### Commit Best Practices
1. Make atomic commits after each step
2. Include which step of the conversion process (e.g., "Step 1/6")
3. List all significant changes in bullet points
4. Reference relevant technical details
5. Keep commit messages clear and descriptive

Example:
```
feat: Initial project structure and basic HTML

- Create modular directory structure
  - css/ (with components subdirectory)
  - js/ (with lib and components subdirectories)
  - data/ (for configuration files)
  - assets/ (for fonts and images)
- Add basic index.html for structure testing

Part of static site conversion: Step 1/6
```

---

**Note**: Always commit changes after each significant step and include which part of the conversion process it represents.