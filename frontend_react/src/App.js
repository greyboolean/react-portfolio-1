import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Resume, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Resume />
    <Footer />
  </div>
);

export default App;
