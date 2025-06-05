import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 - Página não encontrada</h2>
      <p>A URL que você acessou não existe.</p>
      <Link to="/">
        <button>Voltar para a página inicial</button>
      </Link>
    </div>
  );
}