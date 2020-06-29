import React from 'react';
import Navbar from './components/navbar'
// import './style.scss'
import Footer from './components/footer';
import Requestpage from './components/request-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './components/contact'
import Help from './components/help'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/how_it_works"  exact component={Requestpage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/help" exact component={Help} />
        </Switch>
        <Footer />
      </Router>

    </div>
    // <div className="App">
    //   <Navbar />
    //   <Landing />
    //   <Tab />
    //   <ContactUs/>
    //   <Footer/>

    // </div>
  );
}

export default App;
