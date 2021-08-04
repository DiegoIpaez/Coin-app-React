import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CoinNavbar from "./CoinNavbar";
import CoinSearch from "./CoinSearch";
import CoinTable from "./CoinTable";
//Funciones Helpers
import { getCoins, searchCoins } from "../helpers/coinsFetch";

const Home = () => {
//todo lo que viene antes del Return es Javascript
  const [coins, setCoins] = useState({
    datos:[],
    loading:true,
    update:false
  })

  const [inputValue,setInputValue] = useState('')

  useEffect(() => {
   //acciones
   getCoins().then((respuesta)=>{
     setCoins({
       datos:respuesta,
       loading:false,
       update:true
     })
    //  console.log(respuesta)
   })
  }, [coins.update])

  useEffect(() => {
    searchCoins(inputValue).then(respuesta=>{
      setCoins({
        datos:respuesta,
        loading:false,
        update:true
      })
    })

  }, [inputValue])

// getCoins()

  coins.datos.length > 0
   ? console.log('Datos cargados')
   : console.log('loading..')

  return (
  <>
  <CoinNavbar coins={coins} setCoins={setCoins} />
  <div className="container mt-5">
    <CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
    <div className="row ">
      <div className="col">

       {coins.loading
       ? <h2 className="text-white text-center">Cargando...</h2>
       : <CoinTable coins={coins} />
       }

      </div>
    </div>
  </div>
  </>
  )
};
export default Home;
