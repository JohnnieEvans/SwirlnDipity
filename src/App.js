import React from 'react';

import { Header } from './pages';
import Routes from './router/Routes';
import './App.css';

const App = () => (
    <div>
        <Header info={{sun2thur: '12 - 9 p.m.', frisat: '12 - 9:30 p.m.'}}/>
        <Routes />
    </div>
);

export default App;
