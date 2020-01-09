import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
  const [ criptomonedas, guardarCriptomonedas ] = useState([]);
  const [ modenaCotizar, guardarMonedaCotizar ] = useState('');
  const [ criptoCotizar, guardarCriptoCotizar ] = useState('');
  const [ error, guardarError ] = useState(false);

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

  // Validar que el usuario llene ambos campos

  const cotizarMoneda = e => {
    e.preventDefault();

    // validar si ambos campos estan llenos
    if (modenaCotizar === '' || criptoCotizar === '') {
      guardarError(true);
      return;
    }
    
    // pasar al campo principal
    guardarError(false);
    guardarMoneda(modenaCotizar);
    guardarCriptomoneda(criptoCotizar)
  }

  //Mostrar el error en caso de que exista
  const componente = (error) ? <Error mensaje="Ambos campos son obligatorios"/> : null;

  return (
    <form onSubmit={cotizarMoneda}>
      {componente}
      <div className="row">
        <label htmlFor="">Elige tu Moneda</label>
        <select name="" id="" className="u-full-width"
          onChange={ e => guardarMonedaCotizar(e.target.value) }
        >
          <option value="">-- Elige tu moneda --</option>
          <option value="USD">Dolar Estadounidense</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="">Elige tu Criptomoneda</label>
        <select className="u-full-width"
          onChange={ e => guardarCriptoCotizar(e.target.value) }
        >
          <option value="">-- Elige tu criptomoneda --</option>
          {
            criptomonedas.map(criptomoneda => (
              <Criptomoneda 
                key={criptomoneda.CoinInfo.Id}
                criptomoneda={criptomoneda} />
            ))
          }
        </select>
      </div>
      <input type="submit" className="button-primary u-full-width" value ="Calcular" />
    </form>
  );
}
 
export default Formulario;