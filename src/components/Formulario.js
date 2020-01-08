import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Criptomoneda from './Criptomoneda';

const Formulario = () => {
  const [ criptomonedas, guardarCriptomonedas ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
      const resultado = await Axios.get(url)
      console.log("TCL: consultarAPI -> resultado", resultado.data.Data)
      guardarCriptomonedas(resultado.data.Data)
    }

    consultarAPI()

    //Colocar respuesta en el staet
  }, [])

  return (
    <form>
      <div className="row">
        <label htmlFor="">Elige tu Moneda</label>
        <select name="" id="" className="u-full-width">
          <option value="">-- Elige tu moneda --</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="">Elige tu Criptomoneda</label>
        <select className="u-full-width">
          {
            criptomonedas.map(criptomoneda => (
              <Criptomoneda 
                key={criptomoneda.CoinInfo.Id}
                criptomoneda={criptomoneda} />
            ))
          }
        </select>
      </div>
    </form>
  );
}
 
export default Formulario;