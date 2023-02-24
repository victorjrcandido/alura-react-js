import './Colaborador.css';
import React from 'react';

const Colaborador = ({ nome, imagem, lane, corDeFundo }) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{lane}</h5>
      </div>
    </div>
  )
}

export default Colaborador

