import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../data/smoothies';
import FlavorCard from './reusable/FlavorCard';



const renderFlavors = (data) => data.map((data) =>
    <FlavorCard key={data._id} data={data} />
);

export const Smoothies = () => (
    <div className='smoothies'>
        <h3>Smoothie Flavors</h3>
        <ul>{renderFlavors(data)}</ul>
        <p className='link'>Current add-ins can be found <Link to='/addins'>here</Link></p>
    </div>
);
