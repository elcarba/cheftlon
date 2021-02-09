import React from 'react';
import PropTypes from 'prop-types';
import {Table as TableCore, TableHead, TableBody, TableRow, TableCell, TableContainer} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import ActionsMenu from "./ActionsMenu/ActionsMenu";

const useStyles = makeStyles((theme) => ({
    thead: {
        padding: 10
    },
    cellDense: {
        padding: 0
    },
    table: {
        minWidth: 650,
    },
}));

export default function Table({ rowsHead, rowsBody, withActions }) {
    const classes = useStyles();
    return (
        <TableContainer>
            <TableCore className={classes.table}>
                <TableHead>
                    <TableRow key={"header"}>
                        { withActions && <TableCell className={classes.thead}>Actions</TableCell> }

                        {
                            Object.keys(rowsHead).map((row, index) =>
                                <TableCell key={index} className={classes.thead}>
                                    { rowsHead[row] }
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rowsBody.map((row) => (
                            <TableRow hover key={row._id}>
                                {
                                    withActions &&
                                    <TableCell className={classes.cellDense}>
                                        <ActionsMenu
                                            onEdit={() => withActions.onEditClick(row._id)}
                                            onDelete={() => withActions.onDeleteClick(row._id)}
                                        />
                                    </TableCell>
                                }

                                {
                                    Object.keys(rowsHead).map((rowHeader, index) =>
                                        <TableCell key={index}>{ row[rowHeader] }</TableCell>
                                    )
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>

                {
                    !rowsBody.length && (
                        <caption style={{textAlign:'center', padding: 100}}>No records to display</caption>
                    )
                }
            </TableCore>
        </TableContainer>
    );
}

Table.propTypes = {
    rowsHead: PropTypes.object,
    rowsBody: PropTypes.array,
};