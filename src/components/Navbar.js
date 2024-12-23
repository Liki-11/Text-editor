import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar  navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid ">
      <a className={`navbar-brand text-${props.mode==='dark' ? 'white':'black'}` }href="/">liki's store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        
        
        </div>
        
             <div  className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
                    <input  className="form-check-input"   type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                     <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light' ? 'dark':'light'} mode</label>
            </div>

      
    </div>
  </nav></>
  )
}

