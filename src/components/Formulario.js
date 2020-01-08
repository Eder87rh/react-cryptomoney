import React from 'react';

const Formulario = () => {
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
        <select className="u-full-width"></select>
      </div>
    </form>
  );
}
 
export default Formulario;