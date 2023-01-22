import React, { useState } from "react";
import Form from "../Form";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./FormBox.css";

const FormBox = () => {
  const times = [
    "Programing",
    "Front",
    "Data",
    "Devops",
    "UX",
    "Mobile",
    "Inovation",
  ];

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("Form enviado", nome, cargo, imagem, time);
  }

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Form
          required={true} l
          abel="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Form
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
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
          label="Tista"
          itens={times}
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
