import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer/Drawer';
import RightMenu from "./RightMenu/RightMenu";
import Logo from "../../assets/images/logo.png";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}));

function TopBar(){
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const changeDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
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
            <Avatar src={Logo} alt="logo" className={classes.logo}/>
          </div>


          <RightMenu/>

        </Toolbar>
      </AppBar>

      <Drawer isOpen={openDrawer} onCloseClick={changeDrawerHandler} />
    </div>
  );
};

export default TopBar;