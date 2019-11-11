import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import {
  fetchOrder,
  toggleShip,
} from './actions';
import HeaderShip from '../../components/HeaderShip/HeaderShip';
import ClientInfo from '../../components/ClientInfo/ClientInfo';
import OrderComponent from '../../components/OrderComponent/OrderComponent';

class AppContainer extends Component {
  /**
   * When component should be open data need searched
  */
  componentDidMount = () => {
    const { id } = this.props.match;

    this.props.fetchOrder({ id });
  }

  /**
   * Trigged when user want toggle ShipDetail
  */
  onToggleShip = (id) => {
    this.props.toggleShip(id);
  }

  render() {
    const { order, fulfillments, customer, billingAddress, payments, totals } = this.props;

    return (
      <Fragment>
        <header>
          <h1>Tratamento de entregas</h1>
        </header>

        <HeaderShip
          order={order}
          fulfillments={fulfillments}
        />

        <ClientInfo
          customer={customer}
          billingAddress={billingAddress}
          fulfillments={fulfillments}
          payments={payments}
          totals={totals}
        />

        <OrderComponent
          id={order.id}
          fulfillments={fulfillments.items}
          pointOfSale={order.pointOfSale}
          createdAt={order.createdAt}
          onToggle={this.onToggleShip}
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
  fulfillments: object,
  billingAddress: object,
  customer: object,
  payments: object,
  totals: object,
};

AppContainer.defaultProps = {
  toggleShip: () => {},
  match: {},
  order: {},
  fulfillments: {},
  customer: {},
  billingAddress: {},
  payments: {},
  totals: {},
};

function mapStateToProps(state, ownProps) {
  const { order, fulfillments, customer, billingAddress, payments, totals } = state.app;
  return {
    ...ownProps,
    order,
    customer,
    billingAddress,
    fulfillments,
    payments,
    totals,
  };
}

const mapDispatchToProps = {
  fetchOrder,
  toggleShip,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
