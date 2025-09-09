import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate,useLocation, NavLink, Outlet } from 'react-router-dom';
const UserDetails = () => {
    const navigate=useNavigate()
    const locate=useLocation()
    const state=locate.state||{}
    const { userid }=useParams()
    const[filteruser,setFilterUser]=useState(state.data)
    const baseUrl = import.meta.env.VITE_BASE_URL;
    
    useEffect(()=>{
          if(!filteruser){
        const fetchData=async()=>{
        try{
          await axios.get(`../data.json`).then(response=>{
             setFilterUser(response.data.find(item=>item.id==userid))
           }
         )
        }catch(error){
            console.error("Error fetching data:", error);
        }
     }
     fetchData()
    }
      
    },[userid,filteruser])
      
    if(!filteruser){
        return null
    }
     return (
        <div>
            <div>
               <h1>{filteruser.name}</h1>
            {/* onClick={()=>navigate(`/users`)} */}
               <NavLink to="" end>Marks</NavLink>
               <NavLink to="sports">Sports</NavLink>
               <Outlet context={filteruser}/>
            </div>
            <div>
                 <button onClick={()=>navigate("/users")}>Back</button>
            </div>
        </div> 
            
           
    );
}

export default UserDetails;
