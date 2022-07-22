import React,{useState, useEffect} from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes, NavLink  } from 'react-router-dom';
import "./main_content.css"
const MainContent = () => {

    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const currencys = useSelector((state) => state.currencys);
    const deletestr = useSelector((state) => state.deteleStr);
    console.log(currencys)

    const getCourse = async (currency) => {
        const response = await (await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=UAH`)).json()
        return response
        // console.log(response)
    }
    useEffect(() => {
        dispatch({type:"DELETE_STR"})
        const callPromise = () => {
           setTimeout(() => {
            Promise.all([
                getCourse("USD"),
                getCourse("EUR"),
                getCourse("PLN")
              ]).then(
                result => {
                    if(result){
                        dispatch({type:"ADD_STR"})
                        dispatch({type:"CURRENCY_ADD", payload:result})
                    }
                },
                error => alert("Ошибка: " + error.message) // Ошибка: Not Found
              ).finally(() => setLoader(false))
           }, 2000)
        }
        //setTimeout щоб побачити лоадер
        /////////////
        callPromise()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
     





    return(
        <div className="container">
        {loader && <CircularProgress />}
        <ul className="wrappper_link">
            {currencys.map((item,idx) => (<li className="wrappper_link_href" key={idx}><NavLink to={item.base}>{item.base}</NavLink ></li>))}
        </ul> 
        {deletestr && <p>Оберіть валюту</p>}       
        </div>
    )
}

export default MainContent