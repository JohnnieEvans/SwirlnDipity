import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Toppings extends Component {
    render() {
        return (
            <div>
                <p><Link to='/'>Return</Link></p>
                <p>Toppings</p>
            </div>
        );
    }
}
