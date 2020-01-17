import React from 'react';
import tenis from '../services/tenis.jpg';

const DadosProduto = () => {
    return (
        <div className="dados-produto">
            <div className="tabela">
                <ul>
                    <li>produto</li>
                    <li>sku</li>
                    <li>qtd.</li>
                    <li>preço</li>
                </ul>
            </div>
            <div className="produto">
                <img src={tenis} alt="Foto do tênis coca cola" />
                <ul>
                    <li>
                        <div className="nome-e-foto">
                            <p>Tenis Coca Coca Loretto - Feminino</p>
                            <p>Branco, Cinza, 39</p>
                        </div>
                    </li>
                    <li>
                        <p>AR384675</p>
                    </li>
                    <li>
                        <p>2</p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default DadosProduto;