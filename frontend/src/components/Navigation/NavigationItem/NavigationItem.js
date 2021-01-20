import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

function NavigationItem({ title, href, icon }){
    const onClickHandler = () => {
        alert("history.push()" + href)
    };

    return(
        <ListItem button onClick={onClickHandler}>
            <ListItemIcon> { icon } </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );

}


NavigationItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
};

export default NavigationItem;