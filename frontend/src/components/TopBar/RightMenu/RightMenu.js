import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "../../Menu/Menu";
import { logout } from '../../../store/Auth/authActions';
import Typography from "@material-ui/core/Typography";

export default function RightMenu() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const authReducer = useSelector((state) => state.authReducer);
    const { currentUser } = authReducer;

    useEffect(() => {
        if (!currentUser) {
            history.push("/login")
        }
    }, [currentUser]);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        dispatch(logout());
    }

    const menuItems = () => {
        return [
            {
                label: 'Profile',
                action: () => history.push("/profile")
            },
            {
                label: 'Sign Out',
                action: logoutHandler
            }
        ];
    };

    return (
        currentUser && (
            <>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle /> &nbsp;
                    <Typography variant="body1">
                        { currentUser.name }
                    </Typography>
                </IconButton>

                <Menu
                    isOpen={open}
                    anchorEl={anchorEl}
                    onCloseClick={handleClose}
                    items={menuItems()}
                />
            </>
        )
    );
}