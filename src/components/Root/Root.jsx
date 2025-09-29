import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Tablate from '../Tablate/Tablate';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Tablate></Tablate>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Root;