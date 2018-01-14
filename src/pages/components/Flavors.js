import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../data/flavors';
import FlavorCard from './reusable/FlavorCard';

const renderFlavors = (flavors) => flavors.map((flavor) => {
    if(flavor.name !== 'unavail') {
        return <FlavorCard key={flavor._id} data={flavor} />
    }
    return null;
});

export const Flavors = () => (
    <div className='flavors'>
        <h3>Current Flavors</h3>
        <ul>
        {renderFlavors(data)}
        </ul>
        <p className='link'>Current toppings can be found <Link to='/toppings'>here</Link></p>
    </div>
);
