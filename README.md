<p align="center">
<a href="https://plane.so">
  <img src="./docs/images/city-building-logo-96.png" alt="City Builder" width="70">
</a>
</p>
<h1 align="center"><b>City Builder</b></h1>
<p align="center"><b>An interactive web application that allows users to create and customize a city by building</b></p>
<p align="center">
managing houses with different attributes. Users can adjust house properties, manage weather conditions, and create an engaging cityscape.
</p>

# Live Demo

[View Demo](https://aesthetic-cobbler-ce9216.netlify.app/)

# Tech Stack

- **[Next.js](https://nextjs.org/)** – A React framework for building fast and scalable web applications.
- **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for rapid UI development.
- **[ShadCN](https://ui.shadcn.com/)** – A collection of beautifully designed, accessible UI components for React.
- **[TanStack React Query](https://tanstack.com/query/latest/)** – A powerful data-fetching and state management library for React applications.
- **[localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** – A web API for storing data in the browser persistently.
- **[Cypress](https://www.cypress.io/)** – A modern end-to-end testing framework for web applications.

# ⭐️ Features

## Core Features

1. House Customization

- Adjust house colors
- Set number of floors
- Name houses
- Customize individual floor colors (bonus)

2. House Management

- Add new houses
- Duplicate existing houses
- Remove houses

3. Weather System

- Display weather icons (sun, rain, snow)
- Show current temperature based on location

4. State Persistence

- Save city state to localStorage
- Restore previous session

# ⏰ Task Breakdown and Time Estimates

1. Project Setup and Configuration (2 hours)

- Initialize Next.js project with pnpm
- Configure Tailwind CSS
- Set up React Query
- Configure Cypress for e2e testing

2. Core Components Development (8 hours)

- House component (6 hours)
- Weather widget (2 hours)

3. State Management and Logic (8h)

- House management functions
- localStorage integration
- Weather state handling

**Bonus Features (16 hours)**

Animations (4 hours)

- Not yet implemented.

Drag & drop (6 hours)

- Not yet implemented.

Floor color customization (3 hours)

- Done. Buildings can change floor color from a predefined list.

Testing (3 hours)

- Cypress has been initialized, but tests have not yet been implemented.

# Project Structure

```
src/
├─ components/       # Reusable UI components
│  ├─ ui/           # Shadcn components
├─ constants/       # Global constants, enums, and static values
├─ hooks/           # Custom React hooks for reusable logic
├─ providers/       # Context providers and dependency injection
├─ services/        # API services and business logic
│  ├─ rest/        # REST API service handlers
├─ utils/           # Utility functions and helpers
├─ (app)/           # Application routes and pages
│  ├─ (homepage)/   # Homepage-related components and logic
│  │  ├─ _components/ # Components specific to the homepage
│  │  ├─ page.tsx   # Homepage entry file


```

# How to run this src

1. Clone this repository:

```
git clone git@github.com:tunvTheScholar/scaleflex-city-builder.git
```

2. Create `.env.development` env and copy from `.env.example`

3. Install dependencies:

```
pnpm run install
```

4. Start the project:

```
pnpm run dev
```

5. Run tests:

```
pnpm run cypress:open
```
