import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Primary from "./routs/Primary/Primary";
import Promotions from "./routs/Promotions/Promotions";
import Social from "./routs/Social/Social"; 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Primary/>}/>
        <Route path="/promotions" element={<Promotions/>}/>
        <Route path="/social" element={<Social/>}/>
      </Routes>
    </div>
  );
}

export default App;
