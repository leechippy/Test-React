import React, { useState, useContext } from 'react';
import './List.css'
import { Label } from './Label';
import Tool from '../component/Tool';
// import { MyContext } from '../pages/Home';
import { useSelector } from 'react-redux';
const ListItem = ({ list, onChangeItem, handledelete, onClickAction, status }) => {
    // const { activeStatus, name } = useContext(MyContext)
    const [isclicked, setIsclicked] = useState(Array(list.length).fill(false))

  const reduxresult=useSelector(state=>
            state.showLabel
    )
   
    const handleclick = (index) => {

        setIsclicked((prev) => {
            const updated = [...prev]
            updated[index] = !prev[index]
            return updated
        })
        // const updated = [...isclicked]
        // updated[index] = !isclicked[index]
        // setIsclicked(updated)

    }

    return (
        <div>
            <Tool count={list.length} onChangeItem={onChangeItem}>
                <div className='list-item'>
                    <hr />
                    <span style={{ cursor: 'pointer', float: 'right' }} onClick={() => {
                        onClickAction()
                    }} >{status ? 'Restore' : "Refresh"}</span>
                    <div className='list'>
                        {/* Optional label */}
                        {list.map((item, index) => (
                            <div key={index}>
                                <Label title={item.title} />
                                <h4 key={index} style={{
                                    cursor: "pointer",
                                    color: item.isactive ? "green" : "red",
                                }}
                                    className={`list-entry ${isclicked[index] ? "is-active" : "is-noactive"}`}
                                    onClick={() => { handleclick(index) }}>{item.list}</h4>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    {/* {activeStatus && (<span style={{ color: item.isactive ? "green" : "red" }}>
                                        {item.isactive ? 'Active' : 'Inactive'}
                                    </span>)} */}
                                    {reduxresult &&(<span style={{ color: item.isactive ? "green" : "red" }}>
                                        {item.isactive ? 'Active' : 'Inactive'}
                                    </span> )}
                                    <span style={{ cursor: 'pointer' }} onClick={() => {
                                        handledelete(item)
                                    }} >Delete</span>
                                </div>
                                {/* onClick={onAction} */}
                            </div>
                        ))}
                    </div>
                </div>
            </Tool >
        </div >

    );
}
const MemoizedListItem = React.memo(ListItem);
export { MemoizedListItem as ListItem };
