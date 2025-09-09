import { Link,NavLink, Outlet } from "react-router-dom";
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
        <div className="header-style">
              <NavLink className='testlink' to="/">Home </NavLink>

              <NavLink className={(obj)=>{
                  const {isActive}=obj
                  return `testlink ${isActive?`active`:``}`
              }} to="/users">Users </NavLink>

              <NavLink style={(obj)=>{
                const {isActive}=obj
                // return {color:isActive?'red':'blue'}
              }} to="/settings">Settings </NavLink>

              <NavLink to="/usage">Usage </NavLink>
        </div>
       <Outlet/>
        </div>
    );
}

export default Header;
