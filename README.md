# Farmid-Restaurant-Website

---
# Project Setup

## 1️⃣ Create the project
```bash
npm create vite@latest Farmid-Restaurant-Website
```
## 2️⃣ Move into the project folder
```bash
cd Farmid-Restaurant-Website
```
## 3️⃣ Install dependencies
```bash
npm install
```
## 4️⃣ Install Tailwind CSS and Vite plugin
```bash
npm install tailwindcss @tailwindcss/vite
```
##  ⚙️ Configure Vite
Edit your vite.config.js file:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
```
## 🎨 Configure Tailwind
In your index.css, import Tailwind:
```css
@import "tailwindcss";
```
---

# 🌐 React Redux Setup

## 1️⃣ Install React toolkit
```bash
npm install @reduxjs/toolkit
```

## 2️⃣ Install React Redux
```bash
npm install react-redux
```
# 🌐 npm toasify Setup

## 1️⃣ 
```bash
npm install --save react-toastify
```
---

## 🖥️ Run the Project
Start the development server:
```bash
npm run dev
```
---
# 💡 Technologies Used

⚛️ **React**  
⚡ **Vite**  
🎨 **Tailwind CSS**  
🧭 **React-Redux**  
🧩 **useState**  
🧩 **useEffect**
🧩 **ContextAPI** 
🧩 **React-Toastify**  
🧩 **State-manegment**  
🧩 **Function** 