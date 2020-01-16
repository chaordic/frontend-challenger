import React from 'react';
import Header from '../components/Header';
import DadosCliente from '../components/DadosCliente';
import DadosPagamento from '../components/DadosPagamento';
import DadosPedido from '../components/DadosPedido';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="box-dados">
        <DadosCliente />
        <DadosPagamento />
      </div>
      <DadosPedido />
    </div>
  );
}
export default App;
