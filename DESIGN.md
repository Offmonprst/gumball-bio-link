# DESIGN.md: si Darwin Bio Link (Serene Liquid Glass Edition)

## Direction & Visual Language
- **Profile Identity**: si Darwin (Content Creator)
- **Prompt Reference**: Mobile app UI, liquid glass aesthetic with frosted glass panels, soft lighting, pastel color palette featuring greens and blues, layered composition with depth and transparency, serene and modern mood, smooth rendering technique.
- **Negative Filters Applied**: No low contrast, no harsh shadows, no cluttered layout, no dark color scheme, no pixelation, no sharp edges, no visible grid lines, no excessive text.
- **Dial**: ENERGY 2 / RHYTHM 2 / MOTION 2

## Wallpaper Configuration
- **Desktop**: `assets/bg-desktop.jpg` (Darwin Sticker Collage, compressed from 3.0 MB to 378 KB, 1920x960 progressive JPEG)
- **Mobile**: `assets/bg-mobile.jpg` (Vertical portrait 1080x1920 for mobile screens <= 768px, high definition progressive JPEG)
- **Backdrop Scrim**: Luminous pastel blur veil to guarantee contrast and soft serene lighting across the vibrant wallpaper.

## Social Media Dock & Quick Links
- **Hero Dock**: Replaced status pill with frosted liquid glass pill buttons for Instagram (@thisdarwin.id), TikTok (@thisdarwin.id), and YouTube (@thisdarwin.id9).
- **Bento Grid**: Curated interactive cards for GitHub (Offmonprst), Discord, and Spotify (avoiding duplication with the top social dock).

## Darwin Character Corner (Sudut si Darwin)
- **4 Distinct Poses**:
  1. Darwin Standing with iconic green shoes (assets/darwin-corner-1.png)
  2. Darwin Jumping happily with arms outstretched (assets/darwin-corner-2.png)
  3. Darwin Smiling warmly and waving (assets/darwin-corner-3.png)
  4. Darwin Lying down cheerfully (assets/darwin-corner-4.png)
- **Positioning**: Fixed in bottom-left corner on desktop screens (> 820px); seamlessly integrated at the bottom of the container on mobile devices without obstructing any tap targets.
- **Interactions**: Interactive wobble animation, individual cartoon audio frequencies, and uplifting speech toasts when clicked.

## Palette & Lighting
- **Pastel Glass Surface**: `linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(240, 253, 250, 0.52) 100%)`
- **Pastel Cyan**: `#38BDF8` / `#0284C7` (Sky blue accent)
- **Pastel Mint**: `#34D399` / `#059669` (Fresh green accent)
- **Soft Ambient Scrim**: `linear-gradient(135deg, rgba(240, 249, 255, 0.62) 0%, rgba(236, 253, 245, 0.68) 100%)`
- **Typography (WCAG AAA)**: `#0F2942` (Deep oceanic slate text, > 11:1 contrast on frosted pastel glass)
- **Subtitles**: `#475569` (Muted slate, > 7:1 contrast)

## Component & Border System
- **Radius**: Ultra-smooth rounded squircles (cards: 28px, buttons: 20px, badges: pill 9999px)
- **Lighting**: Soft diffused shadows (`rgba(12, 74, 110, 0.08)` and `rgba(6, 78, 59, 0.06)`), luminous white specular top-rim highlight
- **Interactions**: Fluid hover lift, soft pastel glow, subtle ripple feedback, fully accessible keyboard navigation
