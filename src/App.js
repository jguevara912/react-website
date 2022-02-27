import Navbar  from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

import Home from './components/pages/Home';
import Products from './components/pages/Products'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
