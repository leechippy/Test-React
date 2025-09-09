import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Marks = () => {
    const {marks}=useOutletContext()
    console.log(marks);
    
    return (
        <div>
            <h1>Marks</h1>
        </div>
    );
}

export default Marks;
