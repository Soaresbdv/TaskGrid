// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage'; // Opcional: página 404

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública (ex: página inicial) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota de login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rota privada (ex: dashboard) */}
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;