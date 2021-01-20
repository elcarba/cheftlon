import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer/Drawer';
import RightMenu from "./RightMenu/RightMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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

          <Typography variant="h6" className={classes.title}>
            Cheftion!
          </Typography>

          <RightMenu/>

        </Toolbar>
      </AppBar>

      <Drawer isOpen={openDrawer} onCloseClick={changeDrawerHandler} />
    </div>
  );
};

export default TopBar;