import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link, Routes, Route} from "react-router-dom"
import Home from "./components/Home"

export default function App() {
  return (
    <div className="App">
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          
        </Routes>
    </div>
  );
}


