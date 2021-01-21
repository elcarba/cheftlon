import React from 'react';
import DrawerCore from '@material-ui/core/Drawer';
import Navigation from '../Navigation/Navigation';
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";

export default function Drawer({ isOpen, onCloseClick }) {
    const navigationItems = () => {
        return [
            {
                title: 'Home',
                href: '/',
                icon:  <HomeIcon />
            },
            {
                title: 'Users',
                href: '/users',
                icon:  <PeopleIcon />
            },
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