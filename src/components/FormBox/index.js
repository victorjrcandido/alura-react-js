import React from "react";
import Form from "../Form";
import ListaSuspensa from "../ListaSuspensa";
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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Form label="Nome" placeholder="Digite seu nome" />
        <Form label="Cargo" placeholder="Digite seu cargo" />
        <Form label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Tista" itens={times} />
      </form>
    </section>
  );
};

export default FormBox;
