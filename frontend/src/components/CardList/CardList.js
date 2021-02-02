import React from 'react';
import {Grid} from "@material-ui/core";
import CardItem from "./CardItem/CardItem";

export default function CardList({ list }) {
    return (
        <Grid
            container
            spacing={3}
        >
            {
                list.map((item, i) => {
                    return(
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                            key={i}
                        >
                            <CardItem {...item} />
                        </Grid>
                    );
                })
            }

        </Grid>
    );
}