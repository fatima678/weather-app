import React from 'react'
import './Weatherapp.css'
import search_icon from "../Assets/search.png";


const Weatherapp = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'></input>
            <div className='search-icon'>
                <img src={search_icon} alt=''></img>
            </div>
        </div>
      
    </div>
  )
}

export default Weatherapp
