import React from 'react';
import Navbar from './components/navbar'
import Landing from './components/landing-components'
import './style.scss'
import Tab from './components/tabs'
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Tab />
      <Footer/>
      
    </div>
  );
}

export default App;
