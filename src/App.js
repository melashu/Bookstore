import { Route, Routes, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Book from './components/Book';
import Categorie from './components/Categorie';

function App() {
  return (
    <>
      <header>
        <ul className="link-list">
          <Link to="/" className="logo-title">Bookstore CMS</Link>
          <Link to="/">Books</Link>
          <Link to="/category">Category</Link>
        </ul>
        <div className="user-image">
          <FaUser />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/category" element={<Categorie />} />
      </Routes>
    </>
  );
}

export default App;
