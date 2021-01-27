import React from 'react';
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import NavigationItem from "./NavigationItem/NavigationItem";

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

function Navigation({ items }){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const classes = useStyles();

    return(
        <List className={classes.list}>
            {
                items.map((item, i) => {
                    let navItem = null;

                    if((item.adminView && userInfo.isAdmin) || !item.adminView){
                        navItem = (
                            <React.Fragment key={i}>
                                <NavigationItem
                                    title={item.title}
                                    onClickHandler={item.onAction}
                                    icon={item.icon}
                                />
                            </React.Fragment>
                        );
                    }

                    return navItem;
                })
            }
        </List>
    );

}

export default Navigation;