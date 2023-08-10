import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import App from './App';



import Home from "./Pages.js/Home";
import About from "./Pages.js/About";
import Blog from './Pages.js/Blog';
import Learn from './Pages.js/Learn';



import {createBrowserRouter, RouterProvider,} from "react-router-dom";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Blog",
    element: <Blog/>,
  },
  {
    path: "/Learn",
    element: <Learn/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>
// );







