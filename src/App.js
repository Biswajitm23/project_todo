import logo from './logo.svg';
import './App.css';

import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/todolist'


import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Router>
        <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/registration'element={<Registration/>}></Route>
        <Route path="/todolist" element={<Home />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
