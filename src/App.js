// import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';
// import Loader from 'react-loaders'
// import AnimatedCharacters from './components/AnimatedCharacters'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.scss';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


