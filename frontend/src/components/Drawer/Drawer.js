import React from 'react';
import { useHistory } from 'react-router-dom';
import DrawerCore from '@material-ui/core/Drawer';
import Navigation from '../Navigation/Navigation';
import { People, Home, Kitchen } from "@material-ui/icons";
import {Avatar, Divider, IconButton, Typography} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    backIcon: {
        marginLeft: "auto"
    },
    logoImg: {
        paddingRight: 6,
        paddingLeft: 2,
        marginTop: -8,
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
    }
}));

export default function Drawer({ isOpen, onCloseClick }) {
    const classes = useStyles();
    const history = useHistory();

    const goTo = (href) => {
        history.push(href);

        //Close Drawer
        onCloseClick();
    };

    const navigationItems = () => {
        return [
            {
                title: 'Home',
                onAction: () => goTo('/'),
                icon:  <Home />,
                adminView: false
            },
            {
                title: 'Users',
                onAction: () => goTo('/users'),
                icon:  <People />,
                adminView: true
            },
            {
                title: 'Chefs',
                onAction: () => goTo('/chefs'),
                icon:  <Kitchen />,
                adminView: true
            },
        ];
    };

    return (
        <React.Fragment>
            <DrawerCore anchor="left" open={isOpen} onClose={onCloseClick}>
                <div className={classes.drawerHeader}>
                    <Avatar src={Logo} alt="logo" className={classes.logoImg} />
                    <Typography
                        align="center"
                        color="textSecondary"
                        variant="h6"
                    >
                        Cheftlon
                    </Typography>

                    <IconButton onClick={onCloseClick} className={classes.backIcon}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
               <Navigation items={navigationItems()} onCloseDrawer={onCloseClick} />
            </DrawerCore>
        </React.Fragment>
    );
}