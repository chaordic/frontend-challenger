import React from 'react';

const Header = () => {
    return (
        <div className="header container">
            <div className="title">
                <p>Tratamento de entregas</p>
            </div>
            <hr></hr>
            <div className="menu">
                <div className="pedido">
                    <p><strong>Pedido</strong></p>
                    <p>20201501</p>
                </div>
                <div className="status">
                    <p><strong>Status do pedido</strong></p>
                    <span className="status-circle">
                        <p>Pendente</p>
                    </span>
                </div>
                <div className="entregas-relacionad">
                    <p><strong>Entregas relacionadas</strong></p>
                    <div className="entregas-relacionadas">
                        <p className="box-entrega">F1</p>
                        <p className="box-entrega">F2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;