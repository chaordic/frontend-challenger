import React, { Component } from 'react';

import { parseISO, format } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';


class InfoOrders extends Component {

    state = {
        data: [],
    }

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

            const parsedDate = parseISO(entry.fulfillments.F1.createdAt);

            const formatada = format(
                parsedDate,
                "dd 'de' MMMM, 'às' HH'h':mm",
                {
                    timeZone: 'America/Sao_Paulo',
                    locale: pt,
                }
            );


            return (
                <div className="" key={index}>
                    <h3>Dados do Pedido</h3>

                    <div className="contOrderInfo">
                        <div>
                            <h2>Comprado em</h2>
                            <p>{formatada}</p>
                        </div>
                        <div>
                            <h2>Ponto de Venda</h2>
                            <p>{entry.pointOfSale}</p>
                        </div>
                        <div>
                            <h2>Modalidade de Entrega</h2>
                            <p>
                                {entry.fulfillments.F1.id}&nbsp;
                               <span>{entry.fulfillments.F1.status}</span>&nbsp;
                                {entry.fulfillments.F1.locationType},&nbsp;

                                {entry.fulfillments.F2.id}&nbsp;
                                <span>{entry.fulfillments.F2.status}</span>&nbsp;
                                {entry.fulfillments.F2.locationType}
                            </p>
                        </div>
                    </div>
                </div>
            )
        });


        return (
            <div>
               {result} 
            </div>
        )
    }
}

export default InfoOrders;