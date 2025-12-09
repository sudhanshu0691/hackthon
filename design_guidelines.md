# Design Guidelines: TechSprint Google Innovation Hackathon 2025

## Design Approach
**Selected Approach:** Reference-Based (Google Material Design)
Drawing inspiration from Google's official event pages (Google I/O, Cloud Next) with their bold use of color, geometric shapes, and clean typography. This creates immediate brand recognition and trust.

## Core Design Elements

### Typography
- **Primary Font:** Google Sans/Product Sans for headings (via Google Fonts CDN)
- **Secondary Font:** Roboto for body text and UI elements
- **Hierarchy:**
  - Hero H1: text-5xl md:text-7xl font-bold
  - Section Headers: text-4xl md:text-5xl font-bold
  - Subsections: text-2xl md:text-3xl font-semibold
  - Body: text-base md:text-lg
  - Small text: text-sm

### Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 24 (p-4, h-8, mt-12, etc.)
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl
- Card padding: p-6 md:p-8
- Consistent gaps: gap-6 md:gap-8 for grids

### Component Library

**Navigation**
- Fixed navbar with backdrop blur (backdrop-blur-md bg-white/90)
- Logo left, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer
- CTA button in navbar ("Register Now")

**Hero Section**
- Full-width with large hero image showing innovation/technology/coding team collaboration
- Image: Modern, vibrant photograph of diverse students collaborating on laptops with Google colors subtly integrated in the environment
- Overlay: gradient from dark at bottom to transparent
- Content positioned left-aligned or centered over image
- Blurred-background buttons for CTAs (backdrop-blur-sm bg-white/20)
- Floating geometric shapes (circles, squares) with Google brand colors as accent elements
- Height: min-h-screen with proper content spacing

**Section Patterns**
- Alternating layouts: centered content, left-right splits, full-width grids
- About: Single column, centered, max-w-4xl
- Why Join: 3-column grid (grid-cols-1 md:grid-cols-3) with icon cards
- Tracks: 5-card grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) with images/icons
- Timeline: Vertical timeline with connecting line and milestone cards
- Prizes: Tiered display with prominent top prize, 2-column layout for tiers
- Rules: Two-column layout (requirements left, guidelines right)
- Judging: 4-5 cards in grid format with percentage weights
- Mentors: Card grid (grid-cols-1 md:grid-cols-3 lg:grid-cols-4) with photos
- FAQ: Accordion with expand/collapse, max-w-4xl centered
- Contact: Split layout - contact info left, social links/form right

**Cards**
- Rounded corners: rounded-xl
- Shadows: shadow-md hover:shadow-xl transition
- Border: subtle border or none, depending on background
- Padding: p-6 md:p-8
- Hover: transform hover:scale-105 transition-transform

**Buttons**
- Primary: Bold, Google blue background, white text, rounded-lg px-8 py-3
- Secondary: Outlined or white with shadow
- Sizes: text-base md:text-lg
- Icon integration where appropriate

**Icons**
- Use Material Icons via CDN
- Size: 24px-48px for section headers, 20px for cards
- Match Google's icon style

### Visual Elements

**Geometric Accents**
- Floating circles and squares in Google colors throughout sections
- Position: absolute elements with opacity-10 to opacity-20
- Sizes: varying from w-32 to w-96

**Dividers**
- Subtle wave or diagonal section separators between major sections
- Background transitions between white and light gray (bg-gray-50)

**Google Color Integration**
- Accent colors from Google palette:
  - Blue: #4285F4 (primary CTAs, links)
  - Red: #EA4335 (important elements)
  - Yellow: #FBBC04 (highlights)
  - Green: #34A853 (success states)
- Use as accents in cards, borders, icons, not overwhelming

**Imagery**
- Hero: Large, high-quality image of hackathon/innovation environment
- Track cards: Icon illustrations or stock photos representing each theme (AI brain, code editor, cloud, security shield, green tech)
- Mentor section: Professional headshots with subtle circular frames
- Background patterns: Subtle dot grid or geometric patterns in section backgrounds

### Animations
**Minimal & Purposeful:**
- Scroll-triggered fade-ins for cards (opacity 0 to 1)
- Navbar shadow appears on scroll
- Smooth scroll behavior for navigation
- Card hover effects only
- NO complex scroll animations or parallax

### Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient contrast ratios (text on backgrounds)
- Focus states on all interactive elements
- Alt text for all images
- Keyboard navigation support

## Page Structure
Sections flow: Navbar → Hero → About → Why Join → Tracks → Timeline → Prizes → Rules → Judging → Mentors → FAQ → Contact → Footer

Total sections: 13 complete, feature-rich sections creating a comprehensive event experience that drives registration and participation.