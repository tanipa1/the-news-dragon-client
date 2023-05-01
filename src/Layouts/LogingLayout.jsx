import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogingLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogingLayout;