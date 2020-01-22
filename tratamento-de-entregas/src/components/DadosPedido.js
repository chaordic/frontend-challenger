import React from 'react';

const DadosPedido = () => {
    return (
        <div className="dados-pedido container">
            <p><strong>Dados do Pedido</strong></p>
            <div className="menu">
                <div className="data-compra">
                    <p className="title">Comprado em</p>
                    <p>05 de Fevereiro de 2019, às 19h30</p>
                </div>
                <div className="ponto-venda">
                    <p className="title">Ponto de Venda</p>
                    <p>E-commerce</p>
                </div>
                <div className="tipo-entrega">
                    <p className="title">Modalidade de Entrega</p>
                    <p>F1 Envio pela loja, F2 Retira em Loja</p>
                </div>
            </div>
        </div>
    )
}

export default DadosPedido;