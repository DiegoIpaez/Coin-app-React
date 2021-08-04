const limite = 10;
//con *async* convertimos la funcion en promesa
export const getCoins = async () => {
  //vamos a *esperar (*await) a que el fech nos de la promesa.
  const resp = await fetch(`https://api.coincap.io/v2/assets?limit=${limite}`);
  //hacemos que data *espere a la respuesta
  const info = await resp.json();
  //y despues comprovamos la respuesta/info.
  return info.data;
};

export const searchCoins = async (parametro) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limite}&search=${parametro}`
  );

  const respuesta = await resp.json();

  return respuesta.data;
};
