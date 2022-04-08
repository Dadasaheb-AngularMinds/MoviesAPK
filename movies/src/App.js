import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Favorite from './Components/Favorite';
import MovieInfo1 from './Components/MovieInfo1';
import Latest from './Components/Latest';

function App() {
  return (
    <div className={'bg-dark'}>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />

          <Route path="/MovieInfo1" element={<MovieInfo1 />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Favorite" element={<Favorite />} />

          
          <Route path="/*" element={<Navigate to={"/Home"}></Navigate>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
