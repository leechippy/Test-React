import axios from 'axios';
import { setData, setLoading, setError } from './Store';

const fetchData = (item=0) => {
    return function (dispatch,getState,arg) {
         dispatch(setLoading(true)); // Start loading
        return axios.get('http://localhost:5173/data.json')
            .then(response => {
             if(!item){
                dispatch(setData(response.data));}
                else{
                     const filteredlist = response.data.filter(value => value.id != item.id)
                      dispatch(setData(filteredlist));
                }
                dispatch(setLoading(false));
            })
            .catch(error => {
                dispatch(setLoading(false));
                dispatch(setError('An Error'));
            });
        
      
    };
};
const deleteData = () => {
    return function (dispatch) {
        dispatch(setLoading(true)); // Start loading
       return  axios.get('http://localhost:5173/data.json')
            .then(response => {
                dispatch(setLoading(false));
            })
            .catch(error => {
                dispatch(setLoading(false));
             });
    };
};
 function deleteAndupdate(item){
    return dispatch=>{
         dispatch(deleteData()).
         then (()=>{
             dispatch(fetchData(item))}
         )
    }
 }

export {fetchData,deleteData,deleteAndupdate}