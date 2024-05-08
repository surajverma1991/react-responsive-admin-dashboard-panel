import React from 'react';
import './MainDash.css'
import Cards from '../Cards/Cards';
import Table from '../Table/Table';

const MainDash = () => {
    return (
        <div className='MainDash'>
            <h3>Dashboard</h3>
            <Cards/>
            <Table/>
        </div>
    );
}

export default MainDash;
