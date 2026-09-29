# ✦ Developer Portfolio

> A modern, responsive and pixel-perfect developer portfolio built from a Figma design with **Next.js, TypeScript, Tailwind CSS, Storybook and GSAP**.

---

## ✨ About The Project

This portfolio is a front-end implementation of a **Figma Developer Portfolio design**, carefully translated into a responsive and reusable Next.js application.

The main goal wasn't just to make the design look similar — I focused on building the project with a **clean architecture, reusable components, centralized design tokens and scalable feature-based structure**.

The UI was implemented **pixel-by-pixel based on the Figma design**, including:

* Typography
* Spacing
* Colors
* Gradients
* Border radius
* Buttons
* Form elements
* Responsive layouts
* Component states
* Micro-interactions and animations

---

## 🚀 Tech Stack

| Technology        | Usage                                 |
| ----------------- | ------------------------------------- |
| **Next.js**       | React framework & App Router          |
| **TypeScript**    | Type safety                           |
| **Tailwind CSS**  | Styling & design tokens               |
| **GSAP**          | Scroll animations & parallax          |
| **ScrollTrigger** | Scroll-based animation control        |
| **Storybook**     | Component development & documentation |
| **React**         | UI development                        |
| **Vercel**        | Deployment                            |

---

## 🏗️ Architecture

The project follows a **Feature-Based architecture** to keep each section isolated, maintainable and easy to scale.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── TextField/
│   │   ├── TextArea/
│   │   ├── GradientText/
│   │   ├── SectionHeading/
│   │   ├── Icon/
│   │   ├── TechCard/
│   │   ├── BrowserWindow/
│   │   └── Parallax/
│   │
│   └── layout/
│       ├── Header/
│       └── Footer/
│
├── features/
│   ├── hero/
│   ├── about/
│   ├── work/
│   └── contact/
│
├── hooks/
├── lib/
├── types/
└── constants/
```

### Why Feature-Based?

Instead of keeping everything inside one large component tree, each page section has its own feature folder.

This makes it easier to:

* Maintain the codebase
* Find related logic quickly
* Reuse components
* Scale the project
* Work on individual features independently

---

## 🎨 Design System

The design system was extracted directly from the Figma design instead of manually approximating the visual values.

Design tokens are centralized inside:

```text
tailwind.config.ts
```

### 🎨 Colors

```text
Primary Magenta  → #DC00D3
Primary Cyan     → #0CFFFF
Dark Background  → #100425
```

Alongside neutral, accent, focus and error states.

### 🔤 Typography

The project uses:

* **Josefin Sans** → headings & body
* **Inter** → navigation

The typography scale is mapped into reusable Tailwind tokens:

```text
text-h1
text-h2
text-h3
text-body-lg
text-body-sm
text-label
```

### 🌈 Gradients

Reusable gradients are also defined as design tokens:

```text
bg-brand-gradient
bg-button-gradient
```

This keeps the visual language consistent throughout the application.

---

## 🧩 Reusable Components

One of the main goals of the project was avoiding duplicated UI.

Reusable primitives were created for common interface elements such as:

* Button
* TextField
* TextArea
* SectionHeading
* GradientText
* Icon
* TechCard
* BrowserWindow
* ProjectCard
* Parallax

These components are designed to be used across different features instead of being rebuilt for every section.

---

## 📚 Storybook

The UI components were developed and documented independently using **Storybook**.

This makes it possible to:

* Develop components in isolation
* Test different component states
* Review UI without running the entire page
* Keep the Design System organized
* Improve component reusability

Run Storybook with:

```bash
npm run storybook
```

Then open:

```text
http://localhost:6006
```

---

## ✨ GSAP + ScrollTrigger

The portfolio uses **GSAP + ScrollTrigger** to create subtle scroll-based animations and parallax effects.

The reusable:

```text
<Parallax />
```

component handles the animation layer.

Example:

```tsx
<Parallax speed={40}>
  <DecorativeElement />
</Parallax>
```

### Animation approach

The implementation focuses on subtle motion rather than excessive animation.

A few important details:

* `gsap.context()` is used for lifecycle management
* `ctx.revert()` cleans up animations and ScrollTriggers
* `scrub: 1` provides smooth scroll synchronization
* No scroll-jacking
* Only the Y axis is animated
* Horizontal overflow is avoided
* `prefers-reduced-motion` is respected

This keeps the animation layer lightweight while maintaining a smooth experience.

---

## 📱 Responsive Design

The portfolio was implemented with responsive layouts based on the Figma design.

The main sections adapt across:

```text
📱 Mobile
📱 Tablet
💻 Desktop
🖥️ Large Screens
```

The Hero section, navigation, project cards, tech stack and contact section all have responsive behavior.

---

## 🖼️ Project Sections

### Hero

The Hero section includes:

* Personal introduction
* Developer role
* CTA buttons
* Profile image
* Gradient glow
* Decorative grid
* Responsive layout
* GSAP parallax

### About

Includes:

* Introduction
* Skills
* Tech Stack
* Decorative illustration
* Showcase preview

### Work

The Work section contains reusable project cards with:

* Project title
* Description
* Technology stack
* Preview
* Responsive layout

### Contact

Includes:

* Contact information
* Reusable form components
* Form state & validation
* Responsive layout

---

## 🧠 Next.js Architecture

The project uses the **Next.js App Router**.

Server Components are used by default.

Only components that actually require client-side state are marked with:

```tsx
"use client";
```

Currently, the main Client Components are:

* `Header` → mobile menu state
* `ContactForm` → form state & validation
* `Parallax` → GSAP / ScrollTrigger lifecycle

This keeps the client-side JavaScript limited to places where it's actually needed.

---

## 📂 Project Structure

```text
Developer Portfolio
│
├── src/
│   ├── app/
│   ├── components/
│   │   ├── ui/
│   │   └── layout/
│   │
│   ├── features/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── work/
│   │   └── contact/
│   │
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── constants/
│
├── public/
│   ├── images/
│   └── videos/
│
├── .storybook/
├── tailwind.config.ts
└── package.json
```

---

## 🛠️ Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Start Storybook:

```bash
npm run storybook
```

---

## 📜 Available Scripts

```bash
npm run dev
```

Start the development server.

```bash
npm run build
```

Create a production build.

```bash
npm run start
```

Run the production build.

```bash
npm run typecheck
```

Run TypeScript type checking.

```bash
npm run lint
```

Run ESLint.

```bash
npm run storybook
```

Start Storybook.

```bash
npm run build-storybook
```

Build Storybook for production.

---

## ⚡ Performance & Code Quality

Some of the decisions made during development:

* TypeScript for type safety
* Reusable UI primitives
* Feature-Based architecture
* Centralized design tokens
* Server Components by default
* Limited Client Components
* GSAP lifecycle cleanup
* Reduced-motion support
* No unnecessary scroll-jacking
* Reusable animation components
* Responsive-first implementation

---

## 🎯 Design Fidelity

The original UI was recreated from the provided Figma design with a strong focus on **pixel-level accuracy**.

The implementation covers:

* Layout
* Typography
* Colors
* Spacing
* Gradients
* Buttons
* Forms
* Cards
* Responsive behavior
* Animations

Some decorative assets required approximation because the original Figma assets were not available in the development environment.

These include:

* Hero decorative elements
* Background grid
* About illustration
* Project preview visuals

The project structure keeps these assets isolated, so they can easily be replaced with the original exported Figma assets later.

---

## 🔮 Future Improvements

Possible future improvements include:

* Replace remaining placeholder visuals with exported Figma assets
* Add more project case studies
* Improve accessibility coverage
* Add automated visual regression testing
* Expand Storybook documentation
* Add more advanced GSAP interactions
* Improve SEO metadata
* Add Open Graph / social preview images

---

## 🌐 Live Demo

<p align="center">

### [🚀 View Live Portfolio](https://dev-portfolio-6d29.vercel.app/)

</p>

---

<p align="center">
  Made with ❤️ and a lot of ☕
</p>
