import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { PDF } from './components/PDF';
import './styles/App.css';
import cv from './docs/CV.pdf';
import cch from './docs/CCH.pdf';
import fes from './docs/FES.pdf';
import azure from './docs/AZURE.pdf';
import frontend from './docs/HTML.pdf';
import laravel from './docs/LARAVEL.pdf';
import node from './docs/NODE.pdf';
import oracle from './docs/ORACLE.pdf';
import php from './docs/PHP.pdf';
import react from './docs/REACT.pdf';
import spring from './docs/SPRING.pdf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/curriculum" element={<PDF pdf={cv} />} />
        <Route path="/cch" element={<PDF pdf={cch} />} />
        <Route path="/fes" element={<PDF pdf={fes} />} />
        <Route path="/azure" element={<PDF pdf={azure} />} />
        <Route path="/frontend" element={<PDF pdf={frontend} />} />
        <Route path="/laravel" element={<PDF pdf={laravel} />} />
        <Route path="/node" element={<PDF pdf={node} />} />
        <Route path="/oracle" element={<PDF pdf={oracle} />} />
        <Route path="/php" element={<PDF pdf={php} />} />
        <Route path="/react" element={<PDF pdf={react} />} />
        <Route path="/spring" element={<PDF pdf={spring} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
