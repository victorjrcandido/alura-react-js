import React, { useState } from "react";
import Form from "../Form";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./FormBox.css";

const FormBox = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setCargo('');
    setNome('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Monte seu time de League of Legends</h2>
        <Form
          required={true} l
          label="Campeão"
          placeholder="Digite o nome do campeão"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Form
          required={true}
          label="Dano"
          placeholder="Digite o tipo de dano"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Form
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Lane"
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
