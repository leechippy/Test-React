import React from 'react';
import Home from './pages/Home'
import Settings from './pages/Settings'
import Usage from './pages/Usage'
import Users from './pages/Users'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Header from './componets/Layout/Header'
import UserDetails from './pages/UserDetails'
import NoRecord from './pages/NoRecord'
import Marks from './pages/Marks'
import Sports from './pages/Sports'
const Reactrouterpage = () => {
     return (
    <>
    {/* <a href='home'>home</a>
    <a href='settings'>Settings</a>
    <a href='usage'>Usage</a>
    <a href='users'>Users</a>
   <Router>
      <Home path="home"/>
      <Settings path="settings"/>
      <Usage path="usage"/>
      <Users path="users"/>
   </Router> */}
   {/* basename='Test-React' */}
      <BrowserRouter>
       {/* <Header/>
       <Routes>
         <Route path="home" element={<Home/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="settings" element={<Settings/>}></Route>
         <Route path="usage" element={<Usage/>}></Route>
         <Route path="users" element={<Users/>}></Route>
         <Route path="details/:userid" element={<UserDetails/>}></Route>
         <Route path="*" element={<NoRecord/>}></Route>
      </Routes> */}
       <Routes>
         <Route  element={<Header/>}>
         <Route index element={<Home/>}></Route>
         <Route path="settings" element={<Settings/>}></Route>
         <Route path="usage" element={<Usage/>}></Route>
         <Route path="users"  element={<Outlet/>}>
            <Route index  element={<Users/>}/>
            <Route path=":userid" element={<UserDetails/>}>
               <Route  index element={<Marks/>}/>
               <Route path='sports' element={<Sports/>}/>
            </Route>
         </Route>
         <Route path="*" element={<NoRecord/>}></Route>
         </Route>
      </Routes>
      </BrowserRouter>

     </>
  )
}

export default Reactrouterpage;
