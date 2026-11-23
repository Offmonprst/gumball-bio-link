# DESIGN.md: Gumball Bio Link

## Direction & Identity
- **Project**: The Amazing World of Gumball Bio Link (Elmore Edition)
- **Soul**: Elmore mixed-media collage, vibrant cartoon backgrounds, tactile liquid glass buttons with glossy refraction, and energetic pop-culture spirit.
- **Dial**: ENERGY 3 / RHYTHM 2 / MOTION 2

## Background Configuration
- **Desktop**: `assets/bg-desktop.jpg` (Optimized landscape 1200x675 with fixed cover)
- **Mobile**: `assets/bg-mobile.jpg` (Vertical portrait 1080x1920 for mobile devices <= 768px)
- **Backdrop Scrim**: Subtle gradient veil to ensure text readability across dynamic cartoon backgrounds.

## Button Styling: Liquid Glass
- Translucent frosted glass core with `backdrop-filter: blur(16px)`
- Glossy specular highlight and inner refraction border
- High-contrast ink typography (#0F172A / #18181B) guaranteeing WCAG AAA compliance (> 7:1)
- Interactive liquid ripple and bounce feedback on hover and active states

## Color Palette (WCAG AA Compliant)
- **Gumball Cyan**: `#0284C7` (Text) / `#00B4D8` (Liquid glass tint)
- **Darwin Orange**: `#C2410C` (Text) / `#FF6B35` (Liquid glass tint)
- **Anais Pink**: `#BE185D` (Text) / `#F472B6` (Liquid glass tint)
- **Elmore School Gold**: `#D97706` (Text) / `#FFD166` (Badges and borders)
- **Comic Ink Dark**: `#0F172A` (Ultra high contrast body text)
- **Glass Core**: `rgba(255, 255, 255, 0.72)` with specular reflections
