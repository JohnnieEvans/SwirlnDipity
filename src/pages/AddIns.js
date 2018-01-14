import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddIns extends Component {
    render() {
        return (
            <div>
                <p><Link to='/'>Return</Link></p>
                <p>Add Ins</p>
            </div>
        );
    }
}
