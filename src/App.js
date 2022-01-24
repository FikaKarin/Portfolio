import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import Cv from './CV';

import Portfolio from './Portfolio';
import Main from './Main';
import Contact from '../src/components/Contact';




function App() {
  return (
    <div className="App">
      
      
        <Navbar />
        <div className="main">
          <Routes>
          <Route path="/Main" element={<Main />}></Route>
            <Route path="/Portfolio" element={<Portfolio />}></Route>
            <Route path="/CV" element={<Cv />}></Route>
            <Route path="https://instagram.com/lundqvistkarin" target="_blank">Instagram</Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes> 
          
          
        </div>
      </div>
    
  );
}

export default App;
