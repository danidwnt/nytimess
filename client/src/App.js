import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
