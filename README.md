# 🛒 ShopZone — Multi-Route E-Commerce SPA

A fully functional, multi-route e-commerce Single Page Application built with React and Vite as part of an Engineering Residency Sprint.

---

## 🚀 Live Demo

[View on Vercel](#) <!-- Replace with your Vercel URL -->

## 📦 GitHub Repository

[github.com/sakshirawat1611/shopzone](https://github.com/sakshirawat1611/shopzone)

---

## 📌 Project Overview

ShopZone is a production-grade SPA that demonstrates core frontend engineering concepts including client-side routing, global state management, API consumption, localStorage persistence, mock authentication, and protected routes — all without a page reload.

---

## 🧱 Project Structure

```
shopzone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── Shop.jsx / Shop.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── ProductDetail.jsx / ProductDetail.css
│   │   ├── Cart.jsx / Cart.css
│   │   ├── Login.jsx / Login.css
│   │   └── Checkout.jsx / Checkout.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool and dev server |
| React Router DOM v6 | Client-side routing |
| Context API | Global state management |
| localStorage | Cart persistence |
| Lucide React | Professional icon library |
| CSS Modules | Component-scoped styling |
| DummyJSON API | Product data source |

NOTE-I took the help of youtube playlist of CodeWithHarry for the studying of conceps and practicing them before implementing them in the project and I also asked claude ai to suggest me some youtube video links for the concepts

## ✅ Features

### Phase 1 — Base Routing
- BrowserRouter with static routes: `/`, `/shop`, `/contact`
- Dynamic route `/product/:id` using `useParams()`
- Product cards with `useNavigate()` for programmatic routing
- API data fetching with `useEffect` and `useState`

### Phase 2 — Global State
- CartContext using `createContext`, `useContext`, `Provider`
- Add to Cart functionality on Product Detail page
- Live cart badge on Navbar with instant re-render
- Cart page with quantity tracking and aggregate total

### Phase 3 — Auth & Protection
- localStorage sync with lazy `useState` initializer
- Mock authentication with `isLoggedIn` state
- Login as Guest action on `/login` route
- Protected `/checkout` route using custom `ProtectedRoute` component
- Automatic redirect to `/login` for unauthorized users

### Bonus Features
- Dark / Light mode toggle with smooth transition
- Fully responsive layout with CSS Grid and media queries
- Hamburger menu for mobile navigation
- Remove item and quantity counter on Cart page
- Back to Shop button on Product Detail page
- Featured products section and features grid on Home page

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#03044a` (Deep Navy) |
| Accent | `#4F8EF7` (Electric Blue) |
| Gradient | `#03044a → #4a0080 → #4F8EF7` |
| Background | `#f5f6fa` |
| Dark Background | `#0f1117` |
| Font Display | Poppins |
| Font Body | Inter |

---

## 📚 Learning Resources Used

This project was built with a strong focus on **learning through structured resources**. The following YouTube channels and documentation were referenced throughout:

| Resource | Topics Covered |
|---|---|
| **Code With Harry** (YouTube) | React fundamentals, hooks, component structure |
| **Traversy Media** (YouTube) | React Router v6, Context API, project setup |
| **Web Dev Simplified** (YouTube) | Protected routes, useContext patterns |
| **React Official Docs** (react.dev) | useEffect, useState, lazy initializers |
| **React Router Docs** | BrowserRouter, useParams, useNavigate, Outlet |

---

## 🛠️ Development Approach

### Tools Used
- **Windows Command Prompt** — All CLI operations including project initialization, package installation, folder/file creation, Git commands, and dev server management. No VS Code terminal was used at any point.
- **Google Chrome DevTools** — Used throughout for debugging, inspecting console errors, checking localStorage state, and testing responsive layouts using the device toolbar.
- **VS Code** — Code editor only.

### Code Quality Focus
A key learning objective of this sprint was writing **clean, human-readable code**:
- Descriptive variable and function names
- Consistent indentation and formatting
- Separation of concerns — logic in context, UI in components, styles in CSS files
- No inline styles
- Reusable helper functions (e.g. `closeMenu`) to avoid repetition
- Meaningful commit messages

---

## 🚧 Key Concepts Learned

- **Client-side routing** — How BrowserRouter intercepts navigation without page reloads
- **Dynamic routing** — Extracting URL parameters with `useParams()`
- **Context API** — Avoiding prop drilling with `createContext`, `Provider`, `useContext`
- **Side effects** — Using `useEffect` for API fetching and localStorage sync
- **Lazy state initialization** — Reading persisted data from localStorage on first render
- **Protected routes** — Using `<Outlet />` and `<Navigate />` to guard routes
- **Responsive CSS** — CSS Grid, Flexbox, and media queries for mobile-first design
- **Dark mode** — Parent class selector pattern (`.app.dark`) for theme switching

---

## 🐛 Challenges & How They Were Resolved

| Challenge | Resolution |
|---|---|
| `Navbar.css` not found error | Recreated the file via Command Prompt |
| Dark mode not applying to Home page | Fixed using `.app.dark` parent class selectors |
| `useCart` called outside component | Moved hook call inside the component body |
| localStorage breaking after quantity update | Cleared stale cart data from Chrome DevTools Application tab |
| Two conflicting media query blocks in CSS | Merged into a single `@media` block |

---

## 👩‍💻 Author

**Sakshi Rawat**
Engineering Residency — Sprint 3: ShopZone SPA
[github.com/sakshirawat1611](https://github.com/sakshirawat1611)

---

## 📄 License

This project was built for educational purposes as part of an engineering residency program.
