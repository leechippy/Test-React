import React, { useState, useEffect, createContext, useMemo, useCallback, useRef } from 'react';
import { ListItem } from '../list/ListItem';
import { JustInfo, Ref } from '.';
import { useDispatch,useSelector } from 'react-redux';
import { dropdowndispache } from '../redux/Store';
// const MyContext = createContext()
import { fetchData ,deleteData,deleteAndupdate} from '../redux/api';
const Home = () => {
     const {data,isloading,error}=useSelector((state)=>{
           return state.dataInfo
     })
     
     const dispatch=useDispatch()
    // const [listdata, setListData] = useState([])
    // const [filterdata, setFilterData] = useState([])
     const [filterdata, setFilterData] = useState(data)
    
    const [name, setName] = useState('All')
    const [status, setStaus] = useState(false)
    const [activeStatus, setActiveStatus] = useState(true)
    // const asynfun = async (api) => {
    //     await fetch(api).then(item => { return item.json() })
    //         .then(item => {
    //             setListData(item)
    //             setFilterData(item)
    //         })
    // }
    useEffect(() => {
        // asynfun('./data.json')
        // return () => {
        //     console.log('Un Mount');
           
        // }
        dispatch(fetchData());
     }, [])
     useEffect(()=>{
            if(data.length >0){
                setFilterData(data)
            }
     },[data])
 
   

    const onChangeItem = (value) => {
        setName(value)
        // dispatch({
        //      type:'dropdown',
        //      payload:value
        // })
         dispatch(dropdowndispache(value))
        if (value === 'All') {
           setFilterData(data)
        }
        else if (value === 'Active') {
            const filterdata = data.filter((item) => {
                return item.isactive
            })
            setFilterData(filterdata)
        }
        else {
            const filterdata = data.filter((item) => {
                return !item.isactive
            })
            setFilterData(filterdata)
        }

    }
    const handledelete = (item) => {
        // const filteredlist = filterdata.filter(value => value.id != item.id)
        // setFilterData(filteredlist)
        // dispatch(deleteData()).
        // then(()=> dispatch(fetchData(item)))
        dispatch(deleteAndupdate(item))
    }

    const onClickAction = async () => {
         dispatch(fetchData());
        // setStaus(!status)
        // await onChangeItem('All')
        // asynfun(status ? './data.json' : './data1.json')
    }
    const obj = useMemo(() => {
        return {
            value: 1,                        // This is value passing to useMemo
            activeStatus: activeStatus
        }
    }, [activeStatus])

    // const justInfoClick = useMemo(() => {  // Callback function its similar to UseMemo.Only pass function
    //     return () => {                   //Function
    //         console.log('Hii', activeStatus);
    //     }
    // }, [activeStatus])

    // const justInfoClick = useCallback(() => {
    //     console.log('hii')
    // }, [])

    // const refobj = useRef()
       if(isloading){
         return (<p>'Loading'</p>)
       }
        if(error){
         return (<p>{error}</p>)
       }
    return (
        <div className='app-body'>
            {/* <input
                type="checkbox"
                checked={activeStatus}
                onChange={() => setActiveStatus(!activeStatus)}
            /> */}
            {/* <label htmlFor="showLabel">Show Label</label> */}
            {/* <MyContext.Provider value={{ activeStatus, name }}> */}
                <ListItem
                    list={filterdata}
                    onClickAction={onClickAction}
                    onChangeItem={onChangeItem}
                    handledelete={handledelete}
                    status={status} />
            {/* </MyContext.Provider> */}
            {/* <JustInfo justInfoClick={justInfoClick} objval={obj} status={name} />
            <Ref user={["chippy", "jolly"]} ref={refobj}></Ref> */}
        </div>
    );
}

export default Home;
// export { MyContext }
