import React,{useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes, NavLink  } from 'react-router-dom';
import "./currencys.css"
const Currencys = () => {
    const currencys = useSelector((state) => state.currencys);
    const dispath = useDispatch()
    const [showExchange,setShowExchange] = useState({})
    const [stateGetInfo,setStateGetInfo] = useState(false)
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        if(new URL(document.location).pathname !== '/'){
        if(currencys.length){
            dispath({type:"DELETE_STR"})
            let typeCurrency = new URL(document.location).pathname.slice(1)
            const find = currencys.find(item => {
                if(typeCurrency === item.base){
                    return item
                }
            })
            setShowExchange(find)
            setStateGetInfo(true)
            
           
        }else{
            window.location.href = '/'
        }
      
    }
    },[new URL(document.location).pathname])

    useEffect(() => {
        if(document.querySelector('.changeBtn') !== null){
            document.querySelector('.input_count').addEventListener('keyup', function(e) {
                if(e.keyCode === 13){ 
                    const money = document.querySelector('.input_count').value
                    const result = showExchange.rates.UAH * Number(money)
                    console.log(showExchange)
                    setCount(result)
                }
                
              });
              const money = document.querySelector('.input_count').value
              const result = showExchange.rates.UAH * Number(money)
              console.log(showExchange)
              setCount(result)
        }
    },[stateGetInfo, showExchange])

    const exchange = () => {
        const money = document.querySelector('.input_count').value
        const result = showExchange.rates.UAH * Number(money)
        console.log(showExchange)
        setCount(result)
    }

   if(stateGetInfo){
        return (
            <div className="container">
                <div>1 {showExchange.base}: {showExchange.rates.UAH} UAH</div>
                <div>Розрахувати: {count} UAH</div>
                <div className="wrapper_send_curr">
                <input className='input_count' type='number' style={{marginBottom:10}}/>
                <button onClick={exchange} className="changeBtn">Розрахувати</button>
                </div>
            </div>
        )
   }else{
    return (<></>)
   }

}

export default Currencys