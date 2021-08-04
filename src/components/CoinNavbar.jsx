import React from "react";
import { useHistory } from "react-router-dom";
import logo from '../assets/cripto-logo.png'


const CoinNavbar = ({coins, setCoins}) => {
  
  const history=useHistory()

  const updateCoins = () =>{
   setCoins({
     ...coins,
     update:false
   })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <img className="img-logo" src={logo} alt="Logo" />
            <span className="navbar-brand">CryptoApp</span>
          </div>

          <button
            className=" btn btn-coin" onClick={updateCoins}>
            Actualizar
          </button>
        </div>
        <button
          className="btn"
          onClick={()=>{
            localStorage.removeItem('crypto_app_user')
            history.push('/login')
          }}
         
        >
          Salir
        </button>
      </nav>
    </div>
  );
};

export default CoinNavbar;
