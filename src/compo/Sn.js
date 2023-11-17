import React from 'react'
import logo from './../logo.svg'
const Sn = ({title,description,src,url}) => {
  return (


<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",height:"450px"}}>
  <img className="card-img-top" src={src}  style={{height:"200px",width:"280px"}} alt="" />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News"}</p>
    <a href={url} className="btn btn-light">Read More</a>
  </div>
</div>
   
  )
}

export default Sn