import React, { Component } from 'react'

class CustomerDetails extends Component {
    
    state =  {
        data: [],
    }

    // código invocado depois do component estar inserido no DOM
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
                <li className="contentDetails" key={index}>
                    
                        <div>
                            <p>{entry.customer.name}</p>
                            <p>434.654.123-90</p>
                        </div>

                        <div>
                            <p>{entry.customer.email}</p>
                            <p>{entry.customer.telephone.number}</p>
                        </div>

                        <div>
                            <h2>Endereço de Cobrança</h2>
                            <p>
                                {entry.billingAddress.address1},&nbsp;
                                <span>{entry.billingAddress.number}</span> - 
                                <span>{entry.billingAddress.state}</span> -&nbsp; 
                                <span>{entry.billingAddress.zip}</span>
                            </p> 
                            
                        </div>

                        <div>
                            <h2>Endereço de Entrega</h2>
                            <p className="dataHeader">
                                {entry.billingAddress.address1},&nbsp;
                                <span>{entry.billingAddress.number}</span> - 
                                <span>{entry.billingAddress.state}</span> -&nbsp; 
                                <span>{entry.billingAddress.zip}</span>
                            </p> 
                        </div>
                    
                </li>  
            ) 
        })

        

        return (
            <div>
                    
                <h3>Dados do cliente</h3>

                <ul>
                    {result}
                </ul>                
            </div>
        );
    }
}


export default CustomerDetails;