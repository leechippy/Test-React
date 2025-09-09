import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useSearchParams,useNavigate } from 'react-router-dom';
const Users = () => {
    const[data,setData]=useState()
    const[isloading,setLoading]=useState(true)
    const[searchParams,setSearchparams]=useSearchParams()
    const cls=searchParams.get('class')
    const navigate=useNavigate()
   const baseUrl = import.meta.env.VITE_BASE_URL;
     useEffect(()=>{
      const fetchData=async()=>{
      try{
          setLoading(true)
          await axios.get(`${baseUrl}/data.json`).then((response)=>{
           
              setData(response.data)
              setLoading(false)
      })
    }catch(e){
        setLoading(false)
    }
  }
  fetchData()
    },[searchParams])
    if(isloading){
      return(
         <><span>Loading..</span></>
      )
    }
    const onChangeClass=(evt)=>{
           setSearchparams({class:evt.target.value})
    }
  
    return (
        <div>
          <select value={cls} name='classvalue' onChange={(e)=>onChangeClass(e)}>
          <option value="">Choose class</option>
          <option value="1">1</option>
          <option value="5">5</option>
           <option value="6">6</option>
         </select>
           <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
              <th>
                 Name
              </th>
              <th>Description</th>
               <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {data.length >0 && 
                 (
                 data.filter(item=> 
                    {
                      if(!cls)
                        return item
                      else
                        return item.class===parseInt(cls)
                    }
                   )
                 .map((item)=>{
                     return  <tr style={{cursor:'pointer'}} key={item.id} 
                      onClick={()=>navigate(`${item.id}`,{
                        // replace:false,
                        state:{
                          data:item
                        }
                      })}
                      >
                        <td><Link to={`/details/${item.id}`}>{item.name}</Link></td> 
                         <td>{item.description}</td> 
                          {/* <td><button>Delete</button></td>  */}
                           <td>{item.class}</td> 
                     </tr>
                 })
              ) }
            </tbody>
          </table>
        </div>
    );
}

export default Users;
