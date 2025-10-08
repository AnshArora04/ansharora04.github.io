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

## Best Practices

1. Style Customization:
   - Use CSS variables for consistent theming
   - Maintain mobile-first responsive design
   - Keep animations performant

2. Asset Optimization:
   - Optimize font loading for performance
   - Minimize custom script usage
   - Compress images and icons

---

**Note**: This theme is built on LittleLink Custom platform and requires its environment to function. GitHub Pages deployment will need additional configuration beyond standard static site hosting.