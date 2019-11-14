import React from 'react';
import Header from './components/Header';
import CustomerDetails from './components/CustomerDetails'
import PaymentOrder from './components/PaymentOrder';
import InfoOrders from './components/InfoOrders';
import DeliveryInfos from './components/DeliveryInfos';
import DeliveryInfo2 from './components/DeliveryInfo2';



function App() {
    return ( 
        <div className="container">
            <div className="orderContent">
                <Header />
            </div>
            <div className="mainCustomerContent">
                <div className="customerContent">
                    <CustomerDetails />
                </div>
                <div className="paymentContent">
                    <PaymentOrder />
                </div>
            </div>

            <div className="orderInfos">
                <InfoOrders />
            </div>

            <div className='orderDetails'>
                <DeliveryInfos />
            </div>

            <div className='orderDetails'>
                <DeliveryInfo2 />
            </div>
        </div>
    )
}

export default App;