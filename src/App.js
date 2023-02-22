import { useState } from "react";
import Banner from "./components/Banner";
import FormBox from "./components/FormBox";
import Time from "./components/Time";

function App() {

  const times = [
    {
      nome: "Top",
      corPrimaria: "#ffa94d",
      corSecundaria: "#fff4e6"
    },
    {
      nome: "Jungle",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Mid",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Adc",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Suporte",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
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
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
