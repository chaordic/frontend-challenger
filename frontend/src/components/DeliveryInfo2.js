import React, { Component } from 'react';
import { chevron_left } from 'material-ui/icons';

class DeliveryInfo2 extends Component {

    container = React.createRef();
    state = {
      open: false,
      data: [],
    };

   getData() {
    const url = 'http://localhost:3001/pedido';

    fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
   }

    componentDidMount() {
      this.getData();

      document.addEventListener("mousedown", this.handleClickOutside);
    }
    
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    };

    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };


    render() {

        const { data } = this.state;

        const result = data.map((entry, index) => {

            return (
                <div className="" key={index}>

                    <div className="elemntUi" ref={this.container}>
                    <i _ngcontent-qtj-c19="" class="material-icons icon-image-preview">chevron_left</i>
                    <button type="button" className="btn" onClick={this.handleButtonClick}></button>
            
                        <div>
                            <p className="delivC">Entrega {entry.fulfillments.F2.id}</p>
                            <p>{entry.id} - {entry.fulfillments.F2.id}</p>
                        </div>

                        <div className="statusOrder">
                            <h2>Status da Entrega</h2> 
                            <div className="statusColumn">
                                <span className="dotStatus3"></span>
                                <p className="dataHeader">{entry.fulfillments.F2.status}</p>
                            </div>
                        </div>
                    </div>


                    {this.state.open && (
                    <div className="contenSpace" key={index}>
                        <h3>Dados da Entrega</h3>

                        <div className="contDeliInfo">
                            <div>
                                <h2>Retirado por</h2>
                                <p>Alexandre de Oliveira Martins</p>
                                <p>845.983.233-90</p>
                            </div>
                            <div>
                                <h2>Modalidade</h2>
                                <p>{entry.fulfillments.F2.locationType}</p>
                            </div>
                            <div>
                                <h2>Data Previsão Cliente</h2>
                                <p>00/00/0000</p>
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
                            <div>
                                <h2>Transportadora</h2>
                                <p>SISTEMAS S.A</p>
                            </div>
                            <div>
                                <h2>Tipo</h2>
                                <p>Expressa</p>
                            </div>
                            <div>
                                <h2>Preço do Frete</h2>
                                <p>R$00,00</p>
                            </div>
                            <div>
                                <h2>Data Previsão Transportadora</h2>
                                <p>00/00/0000</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            )
        }); 


        return (
            <>
                {result}
            </>
        )
    }
}

export default DeliveryInfo2;