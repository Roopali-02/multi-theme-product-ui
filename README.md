## 🚀 Project Overview
This project demonstrates a dynamic theme switcher built using React, Tailwind CSS and TypeScript. It supports three distinct UI themes and showcases products fetched from an API, displayed in a responsive layout.

## Live Link


## Tech Stack
- React + Vite
- TypeScript
- Tailwind CSS
- Context API
- Responsive design
- Theme-specific layouts and fonts

## Themes Implemented
- **Theme 1:** Light, minimalist layout with sans-serif font and subtle hover effects
- **Theme 2:** Dark mode with sidebar-style layout and bold serif font
- **Theme 3:** Colorful, card-based grid layout with Google Font "Pacifico"

## Setup & run Installations
1. Clone the repository:
```bash
   git clone https://github.com/Roopali-02/multi-theme-product-ui.git
```
2. Navigate into the project directory:
```bash
    cd multi-theme-product-ui
```
3. Install dependencies:
```bash
    npm install
```
4. Start the development server:
```bash
    npm run dev
```

## Folder Structure
- `src/`
  - `components/` – Reusable UI components
  - `context/` – Theme context and provider
  - `pages/` – Page-level components like Home, About, Contact
  - `App.tsx` – Main component with routing

  ## Features
- Dynamic theme switching with persistence
- Product grid with responsive layout
- Hover animations
- API data rendering

## Important Note
- The original API mentioned in the assignment was unavailable at the time of development. As a fallback, this project uses the public API from https://dummyjson.com/products to fetch and display product data.