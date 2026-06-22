# Prompts.md — AI Usage Documentation

## Project: ShopZone SPA

---

## How I Used AI in This Project

This document is an honest account of how I used Claude (AI) during the ShopZone sprint. The goal was never to have AI build the project for me. Instead, I used it strictly as a **strict mentor** — to understand concepts deeply, get guided step-by-step, and write every line of code myself.

---

## My Approach to Using AI

From the very first message, I set the tone clearly:

> "I want you to be my strict mentor and help me with these projects through suggesting various YouTube links and telling me each and every small, key and important concept to make my project complete and successful."

This meant:
- AI would **explain the concept first**, then guide me on where to add code
- AI would **suggest YouTube resources** before I wrote anything new
- AI would tell me **exactly which line and which file** to edit, not rewrite everything
- I corrected Claude multiple times when it gave full file replacements instead of targeted additions

---

## Key Prompting Patterns I Used

### 1. Asking for Concepts Before Code
Instead of "write me the routing code", I asked:

> "Tell me the prerequisites for Phase 1"
> "Tell me the key concepts before we start Phase 2"
> "Tell me what useParams does and why we need it"

This forced me to understand **why** before **how**.

---

### 2. Asking for YouTube Resources
I consistently asked for video references before starting each new concept:

> "Suggest me YouTube links for React Router"
> "Tell me where to learn Context API before we write code"

Resources I was directed to and actually watched:
- **Code With Harry** — React hooks, useState, useEffect, component structure
- **Traversy Media** — React Router v6 crash course, Context API tutorial
- **Web Dev Simplified** — Protected routes pattern
- **react.dev** — Official React documentation for hooks and lazy initializers

---

### 3. Enforcing Mentor-Style Guidance
Whenever Claude gave me a full file rewrite, I pushed back:


### 4. Asking About Clean Code
One of my personal learning goals was understanding what clean code is :

Through this I learned that clean code means:
- **Descriptive names** — `closeMenu` instead of `f` or `handler`
- **No repetition** — creating a helper function like `const closeMenu = () => setMenuOpen(false)` instead of writing `onClick={() => setMenuOpen(false)}` on every single link
- **Consistent indentation** — every nested element indented properly
- **Separation of concerns** — logic stays in context files, UI stays in components, styles stay in CSS files
- **Meaningful commits** — writing commit messages that describe what actually changed
- **No inline styles** — all styling in dedicated CSS files


### 5. Debugging With AI
When errors appeared, I shared the console output and asked for help understanding the root cause:

> "react-dom error: useCart called outside component body"
> "Failed to resolve import Navbar.css"
> "ERR_NAME_NOT_RESOLVED on dummyjson.com"

In each case, Claude explained **why** the error happened, not just how to fix it. This is how I learned:
- Hooks must be called inside component bodies — not at the top level of a file
- CSS files must physically exist on disk before they can be imported
- Network errors are environment issues, not code issues

---

### 6. Camelcase and Naming Conventions
One recurring challenge was adjusting to React's camelCase conventions coming from plain HTML/CSS. Issues I ran into:

- Writing `class` instead of `className`
- Writing `onclick` instead of `onClick`
- Inconsistent naming like `cartitems` instead of `cartItems`

I was still adjusting to this throughout the sprint. Claude would point out the correct convention each time without just fixing it silently — which helped me remember it for next time.

---


## Summary

| What AI Did | What I Did |
|---|---|
| Explained concepts | Typed every line of code |
| Suggested YouTube links | Watched the videos |
| Told me which file and line to edit | Made every edit manually |
| Pointed out errors and why they happened | Debugged and fixed them |
| Suggested design ideas | Made all final design decisions |
| Acted as a strict mentor | Did all the actual engineering work |

---

## Final Reflection

This sprint taught me that AI is most powerful when you use it to **accelerate learning**, not replace it. By asking for concepts first, pushing back on full rewrites, and insisting on understanding every line before moving to the next, I built genuine understanding of React routing, Context API, protected routes, and localStorage — not just a working project.

The code in this repository is mine. The understanding behind it is mine. The AI was the mentor. The work was mine.

---
