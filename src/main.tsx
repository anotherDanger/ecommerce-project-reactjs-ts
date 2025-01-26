import React from "react";
import ReactDOM from 'react-dom/client';
import {Navbar} from './Navbar';
import {Banner} from './Banner';
import {ProductList} from './ProductList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <ProductList></ProductList>
  </React.StrictMode>
)