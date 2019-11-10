import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import {
  fetchOrder,
  toggleShip,
} from './actions';
import { formatAddress } from '../../utils';
import ClientInfo from '../../components/ClientInfo/ClientInfo';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';
import OrderComponent from '../../components/OrderComponent/OrderComponent';

class AppContainer extends Component {
  componentDidMount = () => {
    const { id } = this.props.match;

    this.props.fetchOrder({ id });
  }

  /**
   * Trigged when user want to clear and close CepContainer
  */
  onCloseCep = () => {
    this.props.toggleShip();
  }

  render() {
    const { order } = this.props;

    return (
      <Fragment>

        <h1>Tratamento de entregas</h1>

        <div>
          <p>Pedido</p>
          <span>{order.id}</span>
        </div>

        <div>
          <p>Status</p>
          <span>{order.status}</span>
        </div>

        {order.fulfillments !== undefined &&
          <div>
            <p>Entrega relacionadas</p>
            {Object.values(order.fulfillments).map(e => (
              <span key={e.id}>{e.id}</span>
            ))}
          </div>
        }

        <ClientInfo
          customer={order.customer}
          billingAddress={order.billingAddress}
          fulfillments={order.fulfillments}
          formatAddress={formatAddress}
        />

        <PaymentInfo
          payments={order.payments}
          totals={order.totals}
        />

        <OrderComponent
          fulfillments={order.fulfillments}
          pointOfSale={order.pointOfSale}
          createdAt={order.createdAt}
        />
      </Fragment>

    );
  }
}

AppContainer.propTypes = {
  fetchOrder: func.isRequired,
  toggleShip: func,
  match: object,
  order: object,
};

AppContainer.defaultProps = {
  toggleShip: () => {},
  match: {},
  order: {},
};

function mapStateToProps(state, ownProps) {
  const { order } = state.app;
  return {
    ...ownProps,
    order,
  };
}

const mapDispatchToProps = {
  fetchOrder,
  toggleShip,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
