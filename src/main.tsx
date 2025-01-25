import React from "react";
import ReactDOM from 'react-dom/client';
import {Navbar} from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
  </React.StrictMode>
)