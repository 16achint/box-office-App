import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './components/shows/Show';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="/show/:showId" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
