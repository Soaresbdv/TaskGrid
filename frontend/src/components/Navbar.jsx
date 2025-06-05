import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TaskGrid</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Bem-vindo ao TaskGrid
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Gerencie suas tarefas de forma simples e eficiente.
      </p>
      <div className="flex justify-center">
        <Link 
          to="/dashboard" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Comece Agora
        </Link>
      </div>
    </div>
  );
}