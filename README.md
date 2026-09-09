# FizzBuzz

A classic FizzBuzz implementation built with vanilla JavaScript, Vite, and Tailwind CSS—rendered as an interactive, responsive grid in the browser.

## Overview

This project is a modern, visually appealing take on the classic FizzBuzz programming challenge. It generates the sequence from 1 to 100, applying the traditional FizzBuzz rules (multiples of 3 → "Fizz", multiples of 5 → "Buzz", multiples of 15 → "FizzBuzz"), and displays the results in a color-coded grid with Tailwind CSS styling. The goal is to demonstrate core JavaScript concepts including functions, loops, conditionals, and DOM manipulation with template literals.

## Features

- Generates the complete FizzBuzz sequence (1–100)
- Color-coded output: Fizz (blue), Buzz (green), FizzBuzz (purple), numbers (default)
- Fully responsive grid layout (adapts from mobile to desktop)
- Smooth hover effects and transitions
- Built with modern tooling: Vite and Tailwind CSS v4

## Technologies

- **JavaScript** (vanilla, no frameworks)
- **Vite** (fast build tool and dev server)
- **Tailwind CSS** v4 (with `@tailwindcss/vite` plugin for zero-config setup)

## Getting Started

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
fizzbuzz/
├── index.html              # Entry HTML file
├── src/
│   ├── main.js            # Core fizzbuzz() function and DOM rendering
│   ├── style.css          # Tailwind CSS imports and base styles
│   └── assets/            # Project assets
├── vite.config.js         # Vite configuration with Tailwind plugin
└── package.json           # Project metadata and scripts
```

## What I Learned

This project reinforced key JavaScript fundamentals: building reusable functions (the `fizzbuzz()` function), using loops and conditionals for logic, and dynamically rendering content to the DOM with template literals. I also learned how to integrate Tailwind CSS v4 seamlessly with Vite using its official plugin, which eliminates the need for PostCSS configuration while keeping the build setup minimal and fast.

## Screenshots

*Add screenshots of the running FizzBuzz grid here.* You can capture them by running `npm run dev` and taking a screenshot of the rendered output in your browser.

## Future Improvements

- Add an input field to let users customize the range (e.g., FizzBuzz up to 1000 or just 50)
- Add unit tests using a framework like Vitest to verify the `fizzbuzz()` function
- Add keyboard shortcuts or buttons to trigger the calculation with different parameters
- Implement a dark mode toggle for better accessibility
