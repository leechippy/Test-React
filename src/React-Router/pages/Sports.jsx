import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sports = () => {
     const {sports}=useOutletContext()
    console.log(sports);
    return (
        <div>
            <h1>Sports</h1>
        </div>
    );
}

export default Sports;
