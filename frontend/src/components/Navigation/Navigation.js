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
    const classes = useStyles();

    return(
        <List className={classes.list}>
            {
                items.map((item, i) =>
                    <React.Fragment key={i}>
                        <NavigationItem
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                        />
                    </React.Fragment>
                )
            }
        </List>
    );

}

export default Navigation;