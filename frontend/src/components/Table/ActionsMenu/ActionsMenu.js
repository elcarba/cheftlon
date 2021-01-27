import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from "../../Menu/Menu";

export default function ActionsMenu({ onEdit, onDelete }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMenuItems = () => {
        return [
            {
                label: <><EditIcon/> &nbsp;Edit</>,
                onAction: () => {
                    onEdit();
                    handleClose();
                }
            },
            {
                label: <><DeleteIcon/> &nbsp;Delete</>,
                onAction: () => {
                    onDelete();
                    handleClose();
                }
            }
        ];
    };

    return (
        <>
            <IconButton
                aria-label="more"
                onClick={handleMenu}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                isOpen={open}
                anchorEl={anchorEl}
                onCloseClick={handleClose}
                items={onMenuItems()}
            />
        </>
    );
}