import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Theme management
const getInitialTheme = (): string => {
  const storedTheme = localStorage.getItem('app-theme');
  return storedTheme === 'theme1' || storedTheme === 'theme2' || storedTheme === 'theme3'
    ? storedTheme
    : 'theme1';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme(),
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem('app-theme', action.payload);
      return action.payload;
    }
  }
});

const { setTheme } = themeSlice.actions;
const store = configureStore({ reducer: { theme: themeSlice.reducer } });

// Component Types
interface RootState {
  theme: string;
}

// Header Component
const Header = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <header className="header">
  <div className="logo">🎨 Theme Store</div>
  
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>

  <select
    value={theme}
    onChange={(e) => dispatch(setTheme(e.target.value))}
  >
    <option value="theme1">Theme 1</option>
    <option value="theme2">Theme 2</option>
    <option value="theme3">Theme 3</option>
  </select>
</header>

  );
};

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="content">
      <h1>Product List</h1>
      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

const About = () => (
  <main className="content">
    <h1>About Us</h1>
    <p>This is the about page of our themed app.</p>
  </main>
);

const Contact = () => (
  <main className="content">
    <h1>Contact Us</h1>
    <p>Reach out via email or social media!</p>
  </main>
);

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className={`app-container ${theme} fade-in`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

const ThemedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ThemedApp;
