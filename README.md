# Todo App

A solution to the [Todo app challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW) on [Frontend Mentor](https://www.frontendmentor.io). Built with React, TypeScript, and Tailwind CSS.

## Features

- **Add tasks** — Type in the form and submit to add new tasks to the list
- **Filter tasks** — Switch between `All`, `Active`, and `Completed` views
- **Complete tasks** — Mark tasks as done with a single click
- **Clear completed** — Remove all completed tasks at once
- **Light/Dark theme** — Toggle between themes, with distinct shadow styles for each

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- Custom hook `useTodo` — encapsulates all task logic (state management, filters, clear completed)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Wolfrand/todo-list-app.git

# Navigate to the project folder
cd todo-list-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## How It Works

All task logic lives inside the `useTodo` custom hook, which exposes:

- The task list (filtered by the active filter)
- A function to add new tasks
- A function to toggle task completion
- A function to change the active filter (`all`, `active`, `completed`)
- A function to clear all completed tasks