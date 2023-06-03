import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const colaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Frontend" />
    </div>
  );
}

export default App;
