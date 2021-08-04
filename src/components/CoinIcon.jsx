import React from "react";

const CoinIcon = ({ simbolo }) => {
  return (
    <img
      className="img-logo"
      src={`https://static.coincap.io/assets/icons/${simbolo.toLowerCase()}@2x.png`}
      alt={simbolo}
    />
  );
};

export default CoinIcon;
