import React from 'react';

const renderHours = (info) => {
    if (info !== undefined) {
        return (
            <div>
                <h4>Sunday thru Thursday: {info.sun2thur}</h4>
                <h4>Friday and Saturday: {info.frisat}</h4>
            </div>
        );
    }
};

export const Header = ({ info }) => {
    return (
        <div className='header'>
            <img src='/img/Logo.png' alt='Logo' />
            {renderHours(info)}
        </div>
    );
};
