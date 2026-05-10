# Leapfrog Connect | Full Stack Training

This repository contains all the assignments and projects completed during the Leapfrog Connect Full Stack Training program. It documents a learning journey from fundamental web technologies to building applications with modern JavaScript frameworks.

## Live Project Index

A live, browsable index of all completed assignments is available here:
[**View All Assignments**](https://mozarcxiaye.github.io/LeapFrog-Connect/)

## Assignments Overview

The projects are organized by week, with each assignment focusing on specific concepts and technologies.

### Week 1: HTML, CSS, and JavaScript Fundamentals

This week focuses on building a strong foundation in core web technologies.

| Assignment | Description | Technologies |
| :--- | :--- | :--- |
| **1. JS Score Helper** | A simple app to calculate a letter grade based on a numeric score. An introduction to JavaScript DOM manipulation and logic. | HTML, CSS, JS |
| **2. Blog Page** | A static blog page built using semantic HTML tags like `<article>`, `<aside>`, `<video>`, and `<audio>`. | HTML, CSS |
| **3. Hero Section** | A hero section for a product page, focusing on basic layout, styling, and image handling with `object-fit`. | HTML, CSS |
| **4. Featured Carousel**| An auto-scrolling, infinite carousel built with Flexbox and CSS keyframe animations. | HTML, CSS |
| **5. Interactive Promo Widgets**| A collection of interactive UI elements, including animated buttons, hover effects on cards, and loaders, built with CSS transitions and keyframes. | HTML, CSS |
| **6. E-commerce Grid Page** | A responsive e-commerce page layout created using CSS Grid, demonstrating a typical shop structure with a header, sidebar, main content area, and footer. | HTML, CSS |
| **7. Personal Portfolio** | A fully responsive, single-page personal portfolio website showcasing projects and experience. | HTML, CSS |

### Week 2: JavaScript APIs and React

This week transitions to building dynamic applications with JavaScript APIs and the React library.

| Assignment | Description | Technologies |
| :--- | :--- | :--- |
| **1. Vanilla JS Weather App** | A weather application that fetches and displays data from the OpenWeatherMap API using vanilla JavaScript, HTML, and CSS. | HTML, CSS, JS, REST API |
| **2. React Weather App** | The weather application rebuilt using React. This project demonstrates component-based architecture, state management with `useState`, and handling API calls within a React environment. | React, Vite, CSS, REST API |
| **3. TMDB Movie App** | A clone of The Movie Database (TMDB) homepage. This application features popular movie listings, a search bar with live search results, and a responsive layout. It is built with React and utilizes `react-router-dom` for navigation. | React, Vite, React Router, CSS, REST API |

## Technologies Used

*   **Frontend:** HTML5, CSS3 (Flexbox, Grid, Animations), JavaScript (ES6+)
*   **Framework/Library:** React
*   **Build Tool:** Vite
*   **APIs:** OpenWeatherMap, The Movie Database (TMDB)

## How to Run Projects

### Vanilla HTML/CSS/JS Projects (Week 1 & Week 2, Assignment 1)

These projects can be run directly in your web browser.
1.  Clone the repository.
2.  Navigate to the specific assignment folder (e.g., `week-1/assignment6/`).
3.  Open the `index.html` file in your browser.

### React Projects (Week 2, Assignments 2 & 3)

These projects require Node.js and a package manager (like `pnpm` or `npm`).

1.  **Clone the repository.**
2.  **Navigate to the project directory:**
    ```bash
    cd week-2/assignment2
    # or
    cd week-2/assignment3
    ```
3.  **Install dependencies:**
    ```bash
    pnpm install
    # or
    npm install
    ```
4.  **Set up environment variables:** For the TMDB project (`week-2/assignment3`), create a `.env` file in the project root and add your API keys based on the `.example.env` file. You will need to do the same for the React Weather App (`week-2/assignment2`).
5.  **Run the development server:**
    ```bash
    pnpm dev
    # or
    npm run dev
    ```
6.  Open the provided localhost URL in your browser.