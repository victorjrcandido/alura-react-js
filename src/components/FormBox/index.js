import React, { useState } from "react";
import Form from "../Form";
import Botao from "../Botao";
import Lane from "../Lane";
import ListaSuspensa from "../ListaSuspensa";
import "./FormBox.css";

const FormBox = (props) => {

  const [nome, setNome] = useState('')
  // const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [lane, setLane] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      imagem,
      time,
      lane
    });
    // setCargo('');
    setNome('');
    setImagem('');
    setTime('');
    setLane('');
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Monte dois times de League of Legends</h2>
        <Form
          required={true}
          label="Campeão"
          placeholder="Digite o nome do campeão"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Lane
          required={true}
          label="Lane"
          lanes={["Top", "Jungle", "Mid", "Adc", "Suporte"]}
          valor={lane}
          aoAlterado={valor => setLane(valor)}
        />
        {/* <Form
          required={true}
          label="Dano"
          placeholder="Digite o tipo de dano"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        /> */}
        <Form
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default FormBox;
