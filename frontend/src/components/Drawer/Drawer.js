import React from 'react';
import DrawerCore from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Navigation from '../Navigation/Navigation';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export default function Drawer({ isOpen, onCloseClick }) {
    const navigationItems = () => {
        return [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon:  <DashboardIcon />
            },
            {
                title: 'Orders',
                href: '/orders',
                icon:  <ShoppingCartIcon />
            },
            {
                title: 'Customers',
                href: '/customers',
                icon:  <PeopleIcon />
            },
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon:  <BarChartIcon />
            },
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon:  <LayersIcon />
            }
        ];
    };

    return (
        <React.Fragment>
            <DrawerCore anchor="left" open={isOpen} onClose={onCloseClick}>
               <Navigation items={navigationItems()} />
            </DrawerCore>
        </React.Fragment>
    );
}