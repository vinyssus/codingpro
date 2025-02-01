import React from "react"
import './topnav.css'

interface TopNavbarProps {
  isHidden: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ isHidden }) =>{

  return (
    <div className={`top-nav ${isHidden ? "hidden" : ""}`}>
    <div className='border-1 border-primary d-flex w-100 h-100 top-content'>
        <div className='d-flex h-100 w-50 mx-4 align-items-center location-top-nav'>
        <i className="bi bi-geo-alt-fill m-1"></i><span>Face Mermo, Bonamoussadi, Douala, Cameroun</span>
        </div>
        <div className='d-flex h-100 w-25 align-items-center d-none d-md-flex' style={{height:"100% !important"}}>
        <i className="bi bi-cake2-fill m-1"></i><span>Anniversaire 2025</span>
        </div>
        <div className='d-flex h-100 w-25 justify-content-end mx-4 align-items-center d-none d-md-flex'>
        <a href="tel:+237658060432" className='w-100 h-100 d-flex align-items-center justify-content-end'><i className="bi bi-telephone-fill m-1"></i><span>+237 658 060 432</span></a>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
