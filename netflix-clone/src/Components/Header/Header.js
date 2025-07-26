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
        <li><img src={Netflixlogo} alt="Logo" width="90" /></li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>My List</li>
        <li>Browse By Language</li>
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