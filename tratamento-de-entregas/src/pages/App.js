import React from 'react';
import Header from '../components/Header';
import DadosCliente from '../components/DadosCliente';
import DadosPagamento from '../components/DadosPagamento';
import DadosPedido from '../components/DadosPedido';
import Entrega from '../components/Entrega';
import DadosProduto from '../components/DadosProduto';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="box-dados">
        <DadosCliente />
        <DadosPagamento />
      </div>
      <DadosPedido />
      <Entrega />
      <Entrega />
      <DadosProduto />
    </div>
  );
}
export default App;
