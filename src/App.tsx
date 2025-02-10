import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA]">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}