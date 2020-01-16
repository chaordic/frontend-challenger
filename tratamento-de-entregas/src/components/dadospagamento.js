import React from 'react';

const DadosPagamento = () => {
    return (
        <div className="dados-pagamento container">
            <p><strong>Dados do pagamento</strong></p>
            <br></br>
            <div className="dados">
                <p>Subtotal</p>
                <p>R$500,00</p>
            </div>
            <br></br>
            <div className="dados">
                <p>Frete</p>
                <p>R$200,00</p>
            </div>
            <br></br>
            <div className="dados">
                <p>Desconto</p>
                <p className="valor-desconto">-R$10,00</p>
            </div>
            <br></br>
            <div className="dados">
                <p>Valor total</p>
                <p className="valor-total">R$510,00</p>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <p className="title"><strong>Método de pagamento</strong></p>
            <br></br>
            <div className="dados"> 
                <p>VISA **** **** **** 3455 Exp. 23/02</p>
                <p>1x de R$510,00</p>
            </div>
        </div>
    )
}

export default DadosPagamento;