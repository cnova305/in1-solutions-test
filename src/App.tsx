import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Importing Pages
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductListPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
