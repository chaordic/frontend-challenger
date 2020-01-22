import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Header from '../components/Header';
import DadosCliente from '../components/DadosCliente';
import DadosPagamento from '../components/DadosPagamento';
import DadosPedido from '../components/DadosPedido';
import Entrega from '../components/Entrega';
// import DadosProduto from '../components/DadosProduto';
import Table from '../components/Table';
import DadosEntrega from '../components/DadosEntrega';
import { connect } from 'react-redux';
import { carregaLista } from '../actions/index';

const App = ({ dispatch }) => {

  const [lista, setlistaAt] = useState([]);

  useEffect(() => {
    listar()
  }, [])

  // método que faz a chamada API
  const listar = () => {
    api.get('/').then(response => {
      setlistaAt(response.data)
      dispatch(carregaLista(response.data))
      console.log("Mostrando os dados: ", response.data)
    })
  }

  return (
    <div className="App">
      <Header />
      <div className="box-dados">
        {/* {
          lista.map(
            customer => {
              return ( */}
                <DadosCliente {...lista} key={lista.id}/>
              {/* )
            }
          )
        } */}
        <DadosPagamento />
      </div>
      <DadosPedido {...lista} />
      <Entrega />

      <DadosEntrega />
      <Entrega />
    </div>
  );
}

export default connect()(App);

