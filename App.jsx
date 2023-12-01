import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Nav from './component/Nav';
import Header from './Header';
import Services from './Services';
import Choose from './Choose';
import Appointment from './Appointment';
import Footer from './Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className="md:w-[80%] m-auto">
        <Services />
        <Choose />
        <Appointment />
      </div>
      <Footer />
    </>
  );
}

export default App;
