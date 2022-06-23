import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/footer/Footer.jsx';
import Home from "./components/Home/Home";
import Nav from "./components/nav/nav"
import Fasfa from './components/fasfa-component/fasfa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <body>
            <Fasfa />
            <Home/>
            <Footer/>
      </body>
      
);


