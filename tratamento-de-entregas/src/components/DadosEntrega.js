import React from 'react';
import Table from './Table';
import DadosProduto from './DadosProduto';

const DadosEntrega = () => {
    return (
        <div className="dados-entrega container">
            <h2>Dados da entrega</h2>
            <br></br>
            <div className="show-dados">
                <div className="info-entrega">
                    <p>Retirado por</p>
                    <p>Alexandre de Oliveira Martins</p>
                    <p>845.983.233-90</p>
                </div>
                <div className="info-entrega">
                    <p>Modalidade</p>
                    <p>Envio pela loja</p>
                </div>
                <div className="info-entrega">
                    <p>Data Previsão Cliente</p>
                    <p>00/00/0000</p>
                </div>
                <div className="info-entrega">
                    <p>Endereço de Entrega</p>
                    <p>Rua Oscar Freire, 333 São Paulo - SP</p>
                    <p>03745-001</p>
                </div>
                <div className="info-entrega">
                    <p>Transportadora</p>
                    <p>SISTEMAS S.A</p>
                </div>
                <div className="info-entrega">
                    <p>Tipo</p>
                    <p>Expressa</p>
                </div>
                <div className="info-entrega">
                    <p>Preço do Frete</p>
                    <p>R$00,00</p>
                </div>
                <div className="info-entrega">
                    <p>Data Previsão Transportadora</p>
                    <p>00/00/0000</p>
                </div>
            </div>
            <hr></hr>
            <br></br>
            <h2>Detalhes da entrega</h2>
            <br></br>

            <Table />
            <DadosProduto />
        </div>
    )
}
export default DadosEntrega;