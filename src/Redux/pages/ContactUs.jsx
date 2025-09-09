import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS, DELETE_ITEM } from '../Reducer/constant'
import { ListTableReducer, initailState } from "../Reducer/ListTableReducer";

const ContactUs = () => {
    const [state, dispatch] = useReducer(ListTableReducer, initailState)

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: FETCH_INIT });
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
                dispatch({ type: FETCH_SUCCESS, payload: response.data });
            } catch (error) {
                dispatch({ type: FETCH_FAILURE, payload: error.message });
            }
        };
        fetchData();
    }, []);
    const onDelete = (item) => {
        dispatch({
            type: DELETE_ITEM,
            payload: item
        })
    }
    if (state.isloading) {
        return <p>Loading...</p>
    }
    if (state.error) {
        return <p style={{ color: 'red' }}>{state.error}</p>
    }

    return (
        <div>
            <h1>Conatct Us</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.list && state.list.length > 0 ? (state.list.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.completed ? 'Yes' : 'NO'}
                            </td>
                            <td>
                                <button onClick={() => { onDelete(item.id) }}>Delete</button>
                            </td>
                        </tr>

                    ))) : (<tr>
                        <td colSpan="3">No data available</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default ContactUs;
