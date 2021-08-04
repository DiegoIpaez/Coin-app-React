import React from "react";
//libreria para formato de numeros
import numeral from "numeral";
import CoinIcon from "./CoinIcon";


const CoinTable = ({coins}) => {
  return (
    <div className="table-coin table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">#Rank</th>
            <th scope="col" className="text-logo">
              Name
            </th>
            <th scope="col">Price</th>
            <th scope="col">Market cap</th>
            <th scope="col">VWAP(24)</th>
            <th scope="col">Supply</th>
            <th scope="col">Volumen24h</th>
            <th scope="col">Change24h</th>
          </tr>
        </thead>
        <tbody>
        {coins.datos.map(coin=>(
           <tr className="text-center" key={coin.id}>
             <th>{coin.rank}</th>
             <td className="text-logo">
             <CoinIcon simbolo={coin.symbol} />
               {coin.name}</td>
             <td>{numeral(coin.priceUsd).format('$0,0.00')}</td>
             <td>{numeral(coin.marketCapUsd).format('$ 0.00 a')}</td>
             <td>{numeral(coin.vwap24Hr).format('$0,0.00')}</td>
             <td>{numeral(coin.supply).format('0.0a')}</td>
             <td>{numeral(coin.volumeUsd24Hr).format('0.00 a')}</td>
             <td className={coin.changePercent24H>0?"text-success": 'text-danger'}>{parseFloat(coin.changePercent24Hr).toFixed(2)}%</td>
           </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
