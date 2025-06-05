import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}