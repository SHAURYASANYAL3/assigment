# Design Specification: Modern SaaS Website

This document provides the full technical specification for building the website as seen in the provided screenshots.

## 1. Color Palette

### Primary Colors
- **Deep Navy (Background/Headers):** `#0F172A`
- **Vibrant Blue (Accent/Primary Buttons):** `#2563EB`
- **Soft Blue (Secondary/Hover):** `#3B82F6`

### Text Colors
- **Heading Gray:** `#1F2937`
- **Body Gray:** `#4B5563`
- **Light Gray (Subtext/Secondary):** `#9CA3AF`
- **White:** `#FFFFFF`

### UI Colors
- **Background White:** `#FFFFFF`
- **Section Gray:** `#F3F4F6`
- **Border/Divider:** `#E5E7EB`
- **Success Green:** `#10B981`
- **Error Red:** `#EF4444`

## 2. Typography

### Font Family
- **Primary:** `Inter, system-ui, -apple-system, sans-serif`
- **Secondary (Optional for Accents):** `Plus Jakarta Sans`

### Type Scale
- **H1 (Hero):** 64px / 1.2 line-height / -0.02em letter-spacing / 700 weight
- **H2 (Section Header):** 36px / 1.3 line-height / 600 weight
- **H3 (Component Header):** 20px / 1.4 line-height / 600 weight
- **Body Large:** 18px / 1.6 line-height / 400 weight
- **Body Base:** 16px / 1.5 line-height / 400 weight
- **Small/Caption:** 14px / 1.5 line-height / 400 weight

## 3. CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-bg-main: #FFFFFF;
  --color-bg-alt: #F3F4F6;
  --color-text-heading: #1F2937;
  --color-text-body: #4B5563;
  --color-border: #E5E7EB;

  /* Spacing */
  --space-unit: 8px;
  --space-xs: calc(var(--space-unit) * 1); /* 8px */
  --space-sm: calc(var(--space-unit) * 2); /* 16px */
  --space-md: calc(var(--space-unit) * 4); /* 32px */
  --space-lg: calc(var(--space-unit) * 8); /* 64px */
  --space-xl: calc(var(--space-unit) * 12); /* 96px */

  /* Components */
  --border-radius: 8px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --transition-base: all 0.3s ease;
}
```

## 4. Responsive Breakpoints

- **Mobile:** `< 768px` (Single column layouts, stacked navigation)
- **Tablet:** `768px - 1024px` (Two column layouts, hamburger menu)
- **Desktop:** `> 1024px` (Full grid layouts, visible nav links)
- **Max Width:** `1280px` (Container constrained)

## 5. Section-by-Section Breakdown

### 5.1 Navbar
- **Layout:** Flexbox, `space-between`
- **Elements:**
  - **Logo:** Image or styled text on the left.
  - **Nav Links:** Centered or right-aligned. Hover state: Blue underline or color change.
  - **CTA Button:** "Contact Us" - Primary Blue, White text, rounded corners.
- **Sticky:** Fixed to top on scroll with background blur.

### 5.2 Hero Section
- **Layout:** 2-column Grid (Desktop), 1-column (Mobile)
- **Content Left:**
  - H1 Heading: "Unlock Your Business Potential..."
  - Subtext: "We provide innovative software solutions..."
  - Button Group: Primary Blue button ("Get Started") + Outline button ("Learn More").
- **Content Right:**
  - Hero Image: High-quality illustration or product mockup.
- **Background:** Subtle gradient or pure white.

### 5.3 About Section
- **Layout:** 2-column Grid
- **Section Label:** "About Us" in small uppercase blue text.
- **Title:** "We are a team of passionate developers..."
- **Description:** 2-3 paragraphs of body text.
- **Image:** Representative office photo or team working illustration.

### 5.4 Services Section
- **Layout:** 3 or 4-column Grid
- **Section Header:** Centered H2 title and subtitle.
- **Service Cards:**
  - Icon: Blue colored background icon.
  - H3 Title: "Web Development", etc.
  - Description: Short snippet.
  - Interaction: Hover effect (slight scale up or shadow increase).

### 5.5 Team Section
- **Layout:** 4-column Grid
- **Member Card:**
  - Image: Circle or rounded square.
  - Name: Bold H3.
  - Role: Gray caption text.
  - Social Links: Icons for LinkedIn/Twitter.

### 5.6 Testimonials Section
- **Layout:** Carousel or 3-column Grid
- **Quote Card:**
  - Quote: Italicized text.
  - Author: Name, Title, and Profile Image.
  - Rating: 5-star icons in yellow/blue.

### 5.7 Newsletter Section
- **Layout:** Single column, centered
- **Background:** Light blue or dark navy box.
- **Form:**
  - Email Input: Rounded left, border.
  - Button: "Subscribe" - attached to input or right-aligned.

### 5.8 Footer
- **Layout:** Multi-column (4-5 columns)
- **Column 1:** Logo and social icons.
- **Column 2-4:** Navigation lists (Services, Resources, Company).
- **Bottom Bar:** Copyright text and legal links (Privacy, Terms).

## 6. Spacing System

- **Section Padding:** `96px` top/bottom.
- **Grid Gap:** `32px` between cards.
- **Container Side Padding:** `20px` (Mobile), `40px` (Tablet/Desktop).
- **Element Margin:** `16px` between heading and subtext.

## 7. Component Details

### Primary Button
- **Padding:** `12px 24px`
- **Font Weight:** 600
- **Corner Radius:** `var(--border-radius)`
- **Hover:** Darken blue by 10%.

### Cards (Service/Team)
- **Padding:** `24px`
- **Background:** White
- **Border:** `1px solid var(--color-border)`
- **Shadow:** `var(--shadow-sm)` on idle, `var(--shadow-md)` on hover.
