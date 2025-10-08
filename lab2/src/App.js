import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import React from 'react';
import Body from './components/Body';
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
