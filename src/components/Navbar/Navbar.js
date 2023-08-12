import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className='navbar_wrapper'>
        <div className="logo">
            <h3>Logo</h3>
        </div>
        <div className="nav_items">
            <Link to={"/"}> <i class="ri-clipboard-line"></i> Primary</Link>
            <Link to={"/promotions"}><i class="ri-price-tag-3-line"></i>Promotions</Link>
            <Link to={"/social"}><i class="ri-user-follow-line"></i>Social</Link>
        </div>
    </div>
  )
}

export default Navbar