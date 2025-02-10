import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import SpicesPage from './pages/products/Spices';
import PicklesPage from './pages/products/Pickles';
import SnacksPage from './pages/products/Snacks';
import NepaliProductsPage from './pages/products/NepaliProducts';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/spices" element={<SpicesPage />} />
      <Route path="/products/pickles" element={<PicklesPage />} />
      <Route path="/products/snacks" element={<SnacksPage />} />
      <Route path="/products/nepali-products" element={<NepaliProductsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}