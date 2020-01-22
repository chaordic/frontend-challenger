import React from 'react';

const ValorTotal = () => {
    return(
        <div className="valor-total">
            <div className="subtotal">
                    <div className="itens">
                    <p>3 unidades de 2 itens</p>
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
                </div>
        </div>
    )
}
export default ValorTotal;