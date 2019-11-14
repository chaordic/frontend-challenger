import React, { Component } from 'react';
import '../sass/App.scss';

class Header extends Component {
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
                <li className="contentHeader" key={index}>
                    
                        <div>
                            <h3>Pedido</h3>
                            <p className="dataHeader">{entry.id}</p>
                        </div>

                        <div className="statusOrder">
                            <h3>Status Pedido</h3>
                            <div className="statusColumn"> 
                                <span className="dotStatus"></span>
                                <p className="dataHeader">{entry.status}</p>
                            </div>
                        </div>

                        <div>
                            <h3>Entregas relacionadas</h3>
                            <div className="deliveries">
                                <p className="dataHeader">{entry.fulfillments.F1.id}</p>
                                <p className="dataHeader">{entry.fulfillments.F2.id}</p>
                            </div>
                        </div>
                    
                </li>  
            ) 
        })

        console.log(data);

        return (
            <>
                <div className="headerBar">
                    <div className="orderBorder">
                        <h2>Tratamento de entregas</h2>
                    </div>
                    <ul>{result}</ul>
                </div>
            </>
        );
    }
}

export default Header;