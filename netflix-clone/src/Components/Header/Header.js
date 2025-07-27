import React from 'react'
import './header.css' // Assuming you have a CSS file for styling
import Netflixlogo from '../../assets/Images/Netflix-logo.png' 
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <>
    <div className='header-outer-container'>
    <div className='header-container'>
    <div className='header-left'>
      <ul>
        <li><img src={Netflixlogo} alt="Logo" width="100"/></li>
        <li className='list-item'>Home</li>
        <li className='list-item'>TV Shows</li>
        <li className='list-item'>Movies</li>
        <li className='list-item'>Latest</li>
        <li className='list-item'>My List</li>
        <li className='list-item'>Browse By Language</li>
      </ul>
    </div>
    <div className='header-right'>
      <ul>
       <li><SearchIcon /></li>
       <li><NotificationsIcon /></li>
       <li><AccountBoxIcon /></li>
       <li><ArrowDropDownIcon /></li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default Header