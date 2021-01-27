import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

function NavigationItem({ title, onClickHandler, icon }){
    return(
        <ListItem button onClick={onClickHandler}>
            <ListItemIcon> { icon } </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );

}


NavigationItem.propTypes = {
    onClickHandler: PropTypes.func,
    icon: PropTypes.node,
    title: PropTypes.string
};

export default NavigationItem;