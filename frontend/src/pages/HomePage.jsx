// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Bem-vindo ao TaskGrid</h1>
      <Link to="/login">
        <button>Fazer Login</button>
      </Link>
    </div>
  );
}