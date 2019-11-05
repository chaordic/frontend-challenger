import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <>
                <div className="headerBar">
                    <div className="orderBorder">
                        <h2>Tratamento de entregas</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;