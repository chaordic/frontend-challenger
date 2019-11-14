import React, { Component } from 'react'

class PaymentOrder extends Component {
    
    state =  {
        data: [],
    }

    // codifo é invocado depois do component estar inserido no DOM
    componentDidMount() {
        const url = 'http://localhost:3001/pedido'

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
    }


    render() {

        const { data } = this.state;
        
        const result = data.map((entry, index) => {
            return ( 
                <li className="contentPayment" key={index}>
                        <div>
                            <p>Subtotal</p>
                            <p>R$ {entry.totals.subtotal},00</p>
                        </div>

                        <div>
                            <p>Frete</p>
                            <p>R$ {entry.totals.freightCosts},00</p>
                        </div>

                        <div>
                            <p>Desconto</p>
                            <p><span className="discountColor">-R$ {entry.totals.discount},00</span></p>
                        </div>

                        <div className="borderTotal">
                            <p>Valor total</p>
                            <p><span className="totalColor">R$ {entry.totals.total},00</span></p>
                        </div>

                        
                        <div>
                            <h2>Método de Pagamento</h2>
                        </div>

                        <div>
                            <p className="dataHeader">
                                 {entry.payments[0].brand} 
                                 <span>{entry.payments[0].number}</span>
                                <span>{entry.payments[0].expiresAt}</span>
                            </p> 
                            <p>{entry.payments[0].installments} x de R$ {entry.totals.total},00</p>
                        </div>
                    
                </li>  
            ) 
        })

        

        return (
            <>
                    
                <h3>Dados do pagamento</h3>

                <ul>
                    {result}
                </ul>                
            </>
        );
    }
}


export default PaymentOrder;