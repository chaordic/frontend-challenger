import React from 'react';
import tenis from '../services/tenis.jpg';

const DadosProduto = () => {
    return (
        <div className="dados-produto container">
            <div className="card">
                <div className="produto">
                    <img src={tenis} alt="Foto do tênis coca cola" />
                    <div className="nome-e-foto">
                        <p>Tenis Coca Coca Loretto - Feminino</p>
                        <p>Branco, Cinza, 39</p>
                    </div>
                </div>

                <div className="sku">
                    <p className="camp">AR384675</p>
                </div>

                <div className="qtd">
                    <p className="camp">2</p>
                </div>

                <div className="preco">
                    <div className="dados-pgto">
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
                            <p>Valor total</p>
                            <p>R$10,00</p>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default DadosProduto;