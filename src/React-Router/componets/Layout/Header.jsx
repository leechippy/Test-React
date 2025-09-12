import { Link, Outlet } from "react-router-dom";
import React from 'react';
import './Header.css'
import PrivateNavlink from "../PrivateNavlink";

const Header = () => {
    return (
        <div>
        <div className="header-style">
              <PrivateNavlink className='testlink' to="/">Home </PrivateNavlink>

              <PrivateNavlink className={(obj)=>{
                  const {isActive}=obj
                  return `testlink ${isActive?`active`:``}`
              }} to="/users">Users </PrivateNavlink>

              <PrivateNavlink style={(obj)=>{
                const {isActive}=obj
                // return {color:isActive?'red':'blue'}
              }} to="/settings">Settings </PrivateNavlink>

              <PrivateNavlink to="/usage">Usage </PrivateNavlink>
              <PrivateNavlink to="/logout"  >Logout </PrivateNavlink>
        </div>
       <Outlet/>
        </div>
    );
}

export default Header;
