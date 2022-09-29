import { Route, Routes, Link } from 'react-router-dom';
import Book from './components/Book';
import Categorie from './components/Categorie';

function App() {
  return (
    <>
      <header>
        <Link to="/">Books</Link>
        <Link to="/category">Category</Link>
      </header>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/category" element={<Categorie />} />
      </Routes>
    </>
  );
}

export default App;
