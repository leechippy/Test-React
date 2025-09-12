import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link, useParams,useNavigate,useLocation, Outlet } from 'react-router-dom';
import PrivateNavlink from '../componets/PrivateNavlink';
const MyLazyComponent=lazy(()=>import('../componets/section'))

const UserDetails = () => {
    const navigate=useNavigate()
    const locate=useLocation()
    const state=locate.state||{}
    const { userid }=useParams()
    const[filteruser,setFilterUser]=useState(state.data)
    // const baseUrl = import.meta.env.VITE_BASE_URL;
    
    useEffect(()=>{
          if(!filteruser){
        const fetchData=async()=>{
        try{
          await axios.get(`/data.json`).then(response=>{
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
                <Suspense fallback={<div>Loading...</div>}>
                 <h1>{filteruser.name}</h1>
                <MyLazyComponent />
               </Suspense>
              
               
            {/* onClick={()=>navigate(`/users`)} */}
               <PrivateNavlink to="" end>Marks</PrivateNavlink>
               <PrivateNavlink to="sports">Sports</PrivateNavlink>
               <Outlet context={filteruser}/>
            </div>
            <div>
                 <button onClick={()=>navigate("/users")}>Back</button>
            </div>
        </div> 
            
           
    );
}

export default UserDetails;
