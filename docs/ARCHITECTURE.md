# Architecture

## Overview

The app follows a **modular vanilla JavaScript** architecture — each file exposes a single global object with a focused responsibility. Scripts are loaded in dependency order via `index.html`.

## Modules

| Module | Responsibility |
|--------|----------------|
| `config.js` | Immutable app constants |
| `storage.js` | localStorage wrapper |
| `utils.js` | Helpers (uid, escapeHtml, debounce) |
| `state.js` | Central app state + persistence |
| `validation.js` | Input validation rules |
| `tasks.js` | Task CRUD operations |
| `filters.js` | Filter switching |
| `render.js` | DOM rendering |
| `notifications.js` | Toast UI |
| `theme.js` | Theme toggle |
| `keyboard.js` | Keyboard shortcuts |
| `events.js` | DOM event bindings |
| `app.js` | Init / entry point |

## Data Flow
