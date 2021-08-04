// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import CoinNavbar from "./components/CoinNavbar";
// import CoinSearch from "./components/CoinSearch";
// import CoinTable from "./components/CoinTable";
// //Funciones Helpers
// import { getCoins, searchCoins } from "./helpers/coinsFetch";

// const App = () => {
// //todo lo que viene antes del Return es Javascript
//   const [coins, setCoins] = useState({
//     datos:[],
//     loading:true,
//     update:false
//   })

//   const [inputValue,setInputValue] = useState('')

//   useEffect(() => {
//    //acciones
//    getCoins().then((respuesta)=>{
//      setCoins({
//        datos:respuesta,
//        loading:false,
//        update:true
//      })
//     //  console.log(respuesta)
//    })
//   }, [coins.update])

//   useEffect(() => {
//     searchCoins(inputValue).then(respuesta=>{
//       setCoins({
//         datos:respuesta,
//         loading:false,
//         update:true
//       })
//     })

//   }, [inputValue])

// // getCoins()

//   coins.datos.length > 0
//    ? console.log('Datos cargados')
//    : console.log('loading..')

//   return (
//   <>
//   <CoinNavbar coins={coins} setCoins={setCoins} />
//   <div className="container mt-5">
//     <CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
//     <div className="row ">
//       <div className="col">

//        {coins.loading
//        ? <h2 className="text-white text-center">Cargando...</h2>
//        : <CoinTable coins={coins} />
//        }

//       </div>
//     </div>
//   </div>
//   </>
//   )
// };
// export default App;

import React from "react";
//Componentes
import Home from "./components/Home";
import Login from "./components/LoginPage";
//Funciones Helpers

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoutes from './helpers/ProtectedRoutes'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoutes  exact path="/" component={Home} />
        <Route path="*" component={() => "pagina404"} />
      </Switch>
    </Router>
  );
};
export default App;
