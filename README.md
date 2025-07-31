# 🎨 Theme Store React App

A fully responsive, multi-theme React + Redux Toolkit + TypeScript app demonstrating theme switching with animations, product listing from API, and navigation using React Router.

---

## ✨ Features

* **Three Unique Themes**

  * 🟢 Theme 1: Light minimalist layout with sans-serif font
  * ⚫ Theme 2: Dark mode with bold serif font and sidebar style
  * 🎨 Theme 3: Colorful card-based layout with Pacifico font

* **React Router** navigation (Home, About, Contact)

* **Redux Toolkit** for theme state management

* Theme persistence via **localStorage**

* Responsive design for all devices

* Smooth theme switching with animations

* Products fetched from **FakeStoreAPI**

---

## 🚀 Live Demo

> Coming Soon — Deployed via [Netlify](https://themestore-1.netlify.app/)

---

## 🛠️ Tech Stack

* ⚛️ React (with Vite)
* 🔵 TypeScript
* 📦 Redux Toolkit
* 🧭 React Router DOM v7
* 🎨 CSS / Tailwind (optional)
* 🌐 FakeStore API
* 🖋 Google Fonts (Pacifico)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/theme-store-app.git
cd theme-store-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Convert to TypeScript (if not already)

If you created the project with JavaScript and want to switch to TypeScript:

1. Rename files:

   * `main.jsx` → `main.tsx`
   * `App.jsx` → `App.tsx`
   * Any other component files → `.tsx`

2. Create a `tsconfig.json` (if missing):

```bash
npx tsc --init
```

Or copy this into `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

3. Install React TypeScript types:

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

---

### 4. Start the Development Server

```bash
npm run dev
```

Open in your browser: [http://localhost:5173](http://localhost:5173)

---

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── Header.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── store/
│   ├── themeSlice.ts
│   └── index.ts
├── App.tsx
├── main.tsx
├── App.css
└── index.html
```

---

## 🎨 Theme Details

| Theme   | Font                   | Background    | Layout Style      |
| ------- | ---------------------- | ------------- | ----------------- |
| Theme 1 | Helvetica Neue         | Light (white) | Standard grid     |
| Theme 2 | Georgia (serif)        | Dark gray     | Sidebar-like look |
| Theme 3 | Pacifico (Google Font) | Pink/purple   | Playful card grid |

---

## 🙌 Acknowledgements

* [FakeStore API](https://fakestoreapi.com/)
* [Google Fonts](https://fonts.google.com/)
* [React Router](https://reactrouter.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

---

## 📌 Notes

* Ensure you have Node.js ≥ 16.0
* Recommended code editor: **VS Code** with **ESLint + Prettier**
* For better CSS management, consider adding **Tailwind CSS** or **Styled Components**

---
