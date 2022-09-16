import { Route, Routes, Link } from 'react-router-dom';
import Book from './components/Book';
import Categorie from './components/Categorie';

function App() {
  return (
    <>
      <Link to="/">Books</Link>
      <Link to="/category">Category</Link>

      <Routes>
        <Route
          path="/"
          element={
            <Book title="The everyday hero Manifesto" author="Robin Sharma" />
          }
        />
        <Route path="/category" element={<Categorie />} />
      </Routes>
    </>
  );
}

export default App;
