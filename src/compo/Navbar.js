/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = ({seAns}) => {
  return (

        
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"><span className='badge bg-danger text-light  fs-4  '>HD News</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item">
        <div className="nav-link" onClick={()=>seAns("business")} style={{cursor:"pointer"}}>Business</div>
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={()=>seAns("science")} style={{cursor:"pointer"}}>Science</div>
      </li>
      
      <li className="nav-item">
        <div className="nav-link" onClick={()=>seAns("technology")} style={{cursor:"pointer"}}>Technology</div>
      </li>
      
      <li className="nav-item">
        <div className="nav-link" onClick={()=>seAns("entertainment")} style={{cursor:"pointer"}}>Entertainment</div>
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={()=>seAns("health")} style={{cursor:"pointer"}}>Health</div>
      </li>
      
      
    </ul>
    
  </div>
</nav></div>
  
  )
}

export default Navbar