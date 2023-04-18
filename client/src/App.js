import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import React, { useState, useEffect } from 'react';

function App() {

  // const [position, setPosition] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => setPosition([position.coords.latitude, position.coords.longitude]),
  //     (error) => console.error(error)
  //   );
  // }, []);

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
