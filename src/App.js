// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='saved' element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
