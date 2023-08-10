
import React from 'react'
import "../App.css"
import { Outlet, Link , NavLink} from "react-router-dom";
export default function Navbar() {
  return (
    <div className=' '>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Cup Coffe <span><i class="fa-solid fa-mug-hot"></i></span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
              </li>
             
             
           
            
             
             
            </ul>
         
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  )
}






