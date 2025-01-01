import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Code from './pages/Code'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/code" element={<Code />} />
          </Routes>
      </Router>
  );
}

export default App
