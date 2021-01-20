import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "../../Menu/Menu";

export default function RightMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = () => {
        return [
            {
                label: 'Profile',
                action: () => { alert("something Profile") }
            },
            {
                label: 'My account',
                action: () => { alert("something Account") }
            }
        ];
    };

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>

            <Menu
                isOpen={open}
                anchorEl={anchorEl}
                onCloseClick={handleClose}
                items={menuItems()}
            />
        </>
    );
}