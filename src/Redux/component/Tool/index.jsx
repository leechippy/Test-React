import React, { useState, useContext } from 'react';
import './style.css'
// import { MyContext } from '../../pages/Home';
import { useSelector } from 'react-redux';
const Tool = ({ children, count, onChangeItem }) => {
    const name=useSelector((state)=>{
          return state.dropdownName
      })
    // const activename = useContext(MyContext)
    // const { name } = activename

    return (
        <div className='selectbox'>
            <select name='list' value={name} onChange={(e) => onChangeItem(e.target.value)}>
                <option value="All" >ALL </option>
                <option value="Active">Active </option>
                <option value="InActive">In Active </option>
            </select>
            {/* <input type='text' name='name' value={name}></input> */}
            {children}
            <div className='count-list'>
                Total Record {count}
            </div>
        </div>

    );
}

export default Tool;
