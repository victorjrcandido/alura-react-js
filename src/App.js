import { useState } from "react";
import Banner from "./components/Banner";
import Colaborador from "./components/Colaborador";
import FormBox from "./components/FormBox";
import Time from "./components/Time";

function App() {

  const times = [
    {
      nome: "Programing",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Front",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Data",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "UX",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: "Inovation",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <FormBox times={times.map(times => times.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores}
      />)}
    </div>
  );
}

export default App;
