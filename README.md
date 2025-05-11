# E-Commerce Web Application

---

## 🧰 Features

- 🔍 Search products by keyword
- 🎛️ Sort by price, review count, and average rating
- 🧮 Filter products by price range
- 🛒 Shopping cart functionality
- 📦 Responsive design for mobile and desktop
- 🧭 React Router for navigation
- 🐳 Fully Dockerized for easy deployment

---

## 🧱 Technologies Used

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| React             | Frontend framework       |
| React Router v6   | Navigation between pages |
| Axios             | API request handling     |
| Context API       | Global state management  |
| TailwindCSS / CSS | Styling                  |
| Docker            | Containerization         |

---

## 🗂️ Folder Structure

```
ecommerce-app/
│
├── public/ # Static assets like favicon, robots.txt
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── CartItem.jsx
│ │ ├── FilterPanel.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Hero.jsx
│ │ ├── Product.jsx
│ │ ├── SearchBar.jsx
│ │ ├── Sidebar.jsx
│ │ └── SortControls.jsx
│ │
│ ├── contexts/ # React Context providers
│ │ ├── CartContext.jsx
│ │ ├── ProductContext.jsx
│ │ └── SidebarContext.jsx
│ │
│ ├── pages/ # Page-level components
│ │ ├── Home.jsx
│ │ └── ProductDetails.jsx
│ │
│ ├── App.jsx # Main routing component
│ ├── main.jsx # Entry point (React 18 setup)
│ └── index.css # Global styles
│
├── Dockerfile # Docker configuration
├── package.json
└── README.md

```

---

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

### 2. Install Dependencies & Run Locally (Optional)

```
npm install
npm run dev
```

### 3. Run Using Docker (Recommended)

#### ▶️ Run the app

```
docker-compose up --build
```

#### The app will be available at:

```
http://localhost:5173
```
