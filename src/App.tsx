import React from 'react';
import Header from './layout/Header';
import './App.css';
import Hero from './layout/Hero';
import ProjectManage from './layout/ProjectManage';
import Work from './layout/Work';
import Extension from './layout/Extension';
import Customize from './layout/Customize';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectManage />
      <Work />
      <Extension />
      <Customize />
    </div>
  );
}

export default App;
