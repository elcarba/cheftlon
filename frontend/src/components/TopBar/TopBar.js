import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer/Drawer';
import AccountMenu from "./AccountMenu/AccountMenu";
import Logo from "../../assets/images/logo.png";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoContainer: {
    flexGrow: 1,
  },
  logo: {
    padding: theme.spacing(0.3),
    marginLeft: theme.spacing(-1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(4),
    height: theme.spacing(4),
    cursor: 'pointer'
  }
}));

function TopBar(){
  const history = useHistory();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const changeDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  const onLogoClick = () => {
    history.push("/")
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={changeDrawerHandler}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.logoContainer}>
            <Avatar src={Logo} alt="logo" className={classes.logo} onClick={onLogoClick}/>
          </div>


          <AccountMenu/>

        </Toolbar>
      </AppBar>

      <Drawer isOpen={openDrawer} onCloseClick={changeDrawerHandler} />
    </>
  );
};

export default TopBar;