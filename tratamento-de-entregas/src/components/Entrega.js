import React from 'react';

const Entrega = () => {
    return (
        <div className="entrega">
            <div className="menu">
                <div className="btn">
                    <button><span></span></button>
                </div>
                <div className="pedido">
                    <p className="numero-pedido">Entrega </p>
                    <p>05 de Fevereiro de 2019, às 19h30</p>
                </div>
                <div className="status">
                    <p className="status-pedido">Status do pedido</p>
                    <span className="status-circle">
                        <p>Pendente</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Entrega;