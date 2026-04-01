# DigiTools 🚀


## 🌟 Project Overview

**DigiTools** is a modern and responsive React-based web application that showcases premium digital products in a clean, conversion-focused layout. It is designed like a polished product landing page with a product catalog, interactive shopping cart, pricing plans, onboarding steps, and a strong call-to-action flow.

This project blends **React**, **Vite**, **Tailwind CSS**, and **DaisyUI** to create a smooth and visually appealing experience.

---

## ✨ Key Features

- 🎯 **Modern hero section** with strong CTA buttons and platform stats
- 🛍️ **Dynamic product catalog** loaded from local JSON data
- 🛒 **Interactive shopping cart** with add, remove, total calculation, and checkout behavior
- 🚫 **Duplicate product prevention** in cart
- 🔔 **Toast notifications** for add, remove, duplicate, and checkout actions
- 📋 **Tabbed product/cart view** for a cleaner shopping experience
- 📈 **Pricing section** with Starter, Pro, and Enterprise plans
- 🧭 **3-step onboarding section** for user journey storytelling
- 📱 **Responsive layout** for mobile, tablet, and desktop
- 🎨 **Clean UI styling** using Tailwind CSS + DaisyUI components

---

## 🛒 Shopping Cart Behavior

The cart in DigiTools is built for a smooth front-end demo flow:

- Clicking **Buy Now** adds a product to the cart
- If the item already exists, it shows a toast and prevents duplicates
- The cart counter updates in the navbar
- Users can switch between **Products** and **Cart** tabs
- Items can be removed individually
- Total price is calculated automatically
- Clicking **Proceed To Checkout** clears the cart and shows a success toast

> **Note:** This is currently a front-end cart experience only. No payment gateway or backend checkout is connected yet.

---

## 🧰 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **React Icons**
- **React Toastify**

---

## 📁 Project Structure

```bash
B13-A6-DigiTools-web/
├── Public/
│   └── toolsData.json
├── Ui/
│   └── assets/
├── src/
│   ├── Components/
│   │   ├── Products/
│   │   │   ├── CartSection.jsx
│   │   │   ├── Products.jsx
│   │   │   └── ProductsCard.jsx
│   │   ├── ChallengeSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Started.jsx
│   │   └── Subscription.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation & Setup

Clone the project and run it locally:

```bash
git clone https://github.com/mi-araf/B13-A6-DigiTools-web.git
cd B13-A6-DigiTools-web
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Live Demo

🔗 **Live Site:** [DigiTools Web](https://digitools-web-araf.netlify.app/)

---

## 🎨 UI Highlights

The interface includes:

- A bold branded navbar with cart counter
- A premium product showcase section
- Smooth visual hierarchy with cards, badges, and pricing blocks
- A conversion-style CTA banner near the bottom
- A structured footer with navigation and social links

The overall design aims to feel clean, modern, and product-focused, like a startup landing page with a mini shopping experience baked in.

---

## 🔮 Future Improvements

Here are a few ideas to expand the project further:

- Add product search and category filtering
- Store cart items in local storage
- Add authentication for login/signup
- Connect a real checkout/payment system
- Add animations for smoother interactions
- Fetch product data from an API instead of local JSON

---

## 👨‍💻 Author

**Harf Rabbi**

- GitHub: [@mi-araf](https://github.com/mi-araf)
- Live Project: [DigiTools Web](https://digitools-web-araf.netlify.app/)

---

## 📜 License

This project is created for learning and portfolio purposes.

If you want to reuse or modify it, feel free to fork the repository and give proper credit. ⭐

---

<div align="center">

### Thanks for visiting DigiTools-araf 💜

</div>
