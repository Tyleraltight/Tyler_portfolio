# Tyler Portfolio Design System (DESIGN.md)

## 1. Overview & Brand Philosophy
- **Identity**: Tyler — Senior Design Engineer & Creative Developer.
- **Aesthetic**: Modern Fluid Minimalism, Apple-inspired clarity, refined electric blue mesh gradients, high-contrast dark-slate typography, precision glassmorphism.
- **Core Principle**: "Details compound into trust motion" — clean geometry, subtle layered depths, and purposeful whitespace.

## 2. Color Palette & Tokens
### Primary & Accent Colors
- **Core Electric Blue**: `#3B82F6` (Sky/Blue 500)
- **Vibrant Blue Accent**: `#2563EB` (Blue 600)
- **Deep Slate Navy**: `#1E40AF` (Deep blue depth)
- **High-contrast Primary Text**: `#0F172A` (Slate 900)
- **Muted Secondary Text**: `#475569` (Slate 600) / `#64748B` (Slate 500)

### Backgrounds & Mesh Gradient
- **Base Background**: `#BFD2F6` / `#EEF3FB`
- **Mesh Gradients**:
  - Top highlight: `radial-gradient(at 50% -20%, rgba(236, 244, 255, 0.9) 0px, transparent 80%)`
  - Top-right light blue: `radial-gradient(at 90% 10%, rgba(96, 165, 250, 0.6) 0px, transparent 46%)`
  - Core side blue: `radial-gradient(at 5% 50%, rgba(59, 130, 246, 0.45) 0px, transparent 58%)`
  - Bottom deep depth: `radial-gradient(at 50% 110%, rgba(30, 64, 175, 0.7) 0px, transparent 64%)`

### Surfaces & Cards
- **Card Background**: `rgba(255, 255, 255, 0.95)` with subtle inner glow
- **Frosted Glass Surface**: `rgba(255, 255, 255, 0.85)` + `backdrop-blur: 16px`
- **Subtle Card Border**: `rgba(255, 255, 255, 0.6)` / `rgba(226, 232, 240, 0.8)`

## 3. Typography
- **Font Stack**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `'SF Pro Text'`, `Segoe UI`, `sans-serif`
- **Display Hero Title**: 48px - 64px, `font-bold` (700/800), tracking tight (`-0.03em`)
- **Section Heading**: 24px - 32px, `font-semibold` (600)
- **Card Title**: 18px - 20px, `font-semibold` (600)
- **Body Text**: 14px - 16px, `font-normal` (400), line-height `1.6`
- **Meta / Tags**: 12px - 13px, `font-medium` (500), tracking wide (`0.02em`)

## 4. Geometry, Radii & Shadows
- **Card Border Radius**: `24px` (`rounded-3xl`)
- **Button / Pill Radius**: `9999px` (`rounded-full`)
- **Input / Tag Radius**: `12px` (`rounded-xl`)
- **Elevation Shadows**:
  - Soft Card Float: `0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)`
  - Hover Lift: `0 20px 40px -10px rgba(59, 130, 246, 0.15)`

## 5. Component Patterns
- **Hero Section**: Centered high-impact introduction with status badge ("Available for projects") and primary call-to-action pills.
- **Featured Projects**: 2-column or grid modular showcase cards with high-definition preview windows, category badges, role metadata, and live preview links.
- **About Block**: Minimalist floating glass container detailing background, design-engineering philosophy, and current toolchain.
- **Contact & Footer**: Clean action bar with interactive social nodes (GitHub, Twitter, Mail, Telegram).
