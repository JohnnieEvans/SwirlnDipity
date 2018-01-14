import React, { Component } from 'react';

export default class FlavorCard extends Component {
    state = {
        src: '/img/flavor-cards/' + this.props.data.img
    }
    _type = () => {
        if (this.props.data.type === 'icecream') {
            return <p>Ice Cream</p>;
        } else if (this.props.data.type === 'froyo') {
            return <p>Frozen Yogurt</p>;
        } else if (this.props.data.type === 'sorbet') {
            return <p>Sorbet</p>;
        }
        return;
    };

    render() {
        return (
            <li className='flavorcard'>
                <img alt={this.props.data.name} src={this.state.src} onError={() => this.setState({src: '/img/flavor-cards/default.png'})}/>
                <p>{this.props.data.name}</p>
                {this._type()}
            </li>
        );
    }
}

