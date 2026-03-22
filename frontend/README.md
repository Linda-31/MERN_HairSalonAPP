# Salon - Frontend

This is the frontend component of the Luxe Salon MERN application. A modern, premium web application for a hair salon, featuring service listings, stylist profiles, a gallery, and a user booking system.

## 🚀 Live Demo
The application is hosted at: [https://mern-hairsalonapp-1.onrender.com](https://mern-hairsalonapp-1.onrender.com)

## 🛠️ Tech Stack
- **Framework**: [React.js](https://reactjs.org/) (v19)
- **Styling**: 
  - [Bootstrap 5](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/)
  - Custom SASS/CSS for premium aesthetics
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Routing**: [React Router Dom](https://reactrouter.com/)

## 📂 Project Structure
```text
frontend/
├── src/
│   ├── components/      # Reusable UI components (Header, Footer, etc.)
│   ├── pages/           # Page-level components (Home, About, Gallery, etc.)
│   ├── style/           # CSS/SASS stylesheets
│   ├── assets/          # Static images and icons
│   ├── App.js           # Main app routing
│   └── index.js         # Entry point and Global Axios config
├── public/              # Static public assets
└── package.json         # Project dependencies and scripts
```

## ⚙️ Configuration
The frontend is configured to communicate with the backend via a global Axios base URL set in `src/index.js`:
```javascript
axios.defaults.baseURL = 'https://mern-hairsalonapp.onrender.com';
```

## 🏃 Local Development

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- Backend server running (refer to the `/backend` directory)

### 2. Installation
Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

### 3. Start the application
Run the development server:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## 🔨 Available Scripts
- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner.

## 🎨 Design Features
- **Premium Aesthetics**: Glassmorphism effects, curated color palettes, and modern typography.
- **Micro-animations**: Subtle hover effects and smooth scroll transitions using AOS.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
