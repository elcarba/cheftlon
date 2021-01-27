import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuCore from '@material-ui/core/Menu';

function Menu({ isOpen, onCloseClick, anchorEl, items }){
    return(
        <MenuCore
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isOpen}
            onClose={onCloseClick}
        >
            {
                items.map((item, index) =>
                    <MenuItem key={index} onClick={item.onAction}>{ item.label }</MenuItem>
                )
            }
        </MenuCore>
    );

}

export default Menu;