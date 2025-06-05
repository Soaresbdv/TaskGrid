// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar'; // Componente de navegação

function App() {
  return (
    <Router>
      {/* Layout principal com Tailwind */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* Cabeçalho */}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Rodapé */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>TaskGrid © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;