import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from '../../Firebase/Config';
import "./NavBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

function NavBar() {
  const history = useHistory()
  const [nav, setNav] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);
  return (
    <div className={nav ? "navbar active" : "navbar"}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix-Logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      <div className="main-menu">
        <ul className="main-menu-list">
          <li class="menu-item"> 
          <a href="/">
            
            <AiIcons.AiOutlineFileSearch />
            &nbsp;Search</a>
          </li>
          <li class="menu-item">
          <a href="/">
            <AiIcons.AiFillHome />
            &nbsp;Home</a>
          </li>
          <li class="menu-item">
          <a href="/">
          <AiIcons.AiOutlineArrowRight/>
            &nbsp;TV shows</a>
          </li>
          <li class="menu-item">
          <a href="/">
         <LocalMoviesIcon/>
            Latest Movies</a>
          </li>
          <li class="menu-item">
          <a href="/">
          <AiIcons.AiOutlineUnorderedList/>
            &nbsp;My List</a>
          </li>
          <li class="menu-item">
          <a href="/">
            <FaIcons.FaBell/>
            &nbsp;Notifications</a>
          </li>
          
          <li class="menu-item">
          <a href="/">
            <AiIcons.AiFillGift />
            &nbsp;Gift</a>
          </li>
          <li class="menu-item">
          <a href="/" onClick={()=>{
          auth.auth().signOut()
          history.push('/login')
        }}>
            <AiIcons.AiOutlineLogin/>
            &nbsp;LogOut</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
