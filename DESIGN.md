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

## 4 Screen Corners Darwin Characters
- **4 Distinct Poses in 4 Corners**:
  1. Top-Left Corner: Darwin Waving and smiling (assets/darwin-corner-3.png)
  2. Top-Right Corner: Darwin Lying down cheerfully and peeking (assets/darwin-corner-4.png)
  3. Bottom-Left Corner: Darwin Standing proudly with green shoes (assets/darwin-corner-1.png)
  4. Bottom-Right Corner: Darwin Jumping with open arms (assets/darwin-corner-2.png)
- **Initial Slide-In Transition**:
  - Top-Left: slides in from offscreen top-left with spring bounce (0.15s delay)
  - Top-Right: slides in from offscreen top-right with spring bounce (0.28s delay)
  - Bottom-Left: slides in from offscreen bottom-left with spring bounce (0.42s delay)
  - Bottom-Right: slides in from offscreen bottom-right with spring bounce (0.55s delay)
- **Frameless Design & Enhanced Size**:
  - Completely removed boxes, borders, and square backgrounds for pure character cutouts.
  - Desktop (> 768px): enlarged to 140px - 190px for high visibility and expressive presence.
  - Mobile (<= 768px): enlarged to 72px - 88px with clean drop-shadow and non-obstructive safe margins.
- **Interactions**: Interactive spring wobble animation, distinct audio pitches, and unique Elmore reaction toasts on click.

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
