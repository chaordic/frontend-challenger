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
                <div className="contentHeader" key={index}>
                    <nav className="content">
                        <div>
                            <h3>Pedido</h3>
                            <span className="dataHeader">{entry.id}</span>
                        </div>

                        <div className="statusOrder">
                            <h3>Status Pedido</h3>
                            <span className="dataHeader">{entry.status}</span>
                        </div>

                        <div>
                            <h3>Entregas relacionadas</h3>
                            <div className="deliveries">
                                <span className="dataHeader">{entry.fulfillments.F1.id}</span>
                                <span className="dataHeader">{entry.fulfillments.F2.id}</span>
                            </div>
                        </div>
                    </nav>
                </div>  
            ) 
        })

        console.log(data);

        return (
            <>
                <div className="headerBar">
                    <div className="orderBorder">
                        <h2>Tratamento de entregas</h2>
                    </div>
                    <>{result}</>
                </div>
            </>
        );
    }
}

export default Header;