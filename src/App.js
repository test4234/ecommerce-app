import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductGrid />
    </div>
  );
}

export default App;
