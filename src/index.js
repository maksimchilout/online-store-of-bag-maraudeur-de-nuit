import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
window.addEventListener('scroll', function () {
     const scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
        const logo = document.querySelector('.content')
        const logoA = document.querySelector('.logoAnimation')
        logo.classList.add('sc')
        logoA.classList.add('s')
    } else {
        const logo = document.querySelector('.content')
        const logoA = document.querySelector('.logoAnimation')
        logo.classList.remove('sc')
        logoA.classList.remove('s')
    }
})
root.render(

  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);




