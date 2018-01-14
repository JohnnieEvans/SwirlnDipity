import React from 'react';
import { Link } from 'react-router-dom'

export const PageNotFound = () => (
    <div>
        <p>404 - Page Not Found</p>
        <p>Return <Link to='/'>Home</Link></p>
    </div>
);