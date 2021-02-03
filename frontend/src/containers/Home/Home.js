import React, { Component } from 'react';
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {getChefs} from "../../store/ChefList/chefListActions";
import {connect} from "react-redux";
import ChefCard from "../../components/ChefCard/ChefCard";

class Home extends Component {
    componentDidMount(){
        //Fetch All Chefs
        this.props.onGetChefs();
    }

    renderGridCard = () => {
        const { chefs } = this.props;
        return (
            <Grid
                container
                spacing={3}
            >
                {
                    chefs.map((chef, i) => {
                        return(
                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                                key={i}
                            >
                                <ChefCard {...chef} />
                            </Grid>
                        );
                    })
                }

            </Grid>
        );
    };

    render() {
        return (
            <>
                <Typography className="text-center" gutterBottom variant="h4" color="textPrimary">
                    Popular Chefs around the world
                </Typography>
                <Divider />
                <br/>
                <Box mt={3}>
                    { this.renderGridCard() }
                </Box>
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
        chefs: state.chefListReducer.chefs,
        isLoading: state.chefListReducer.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetChefs: () => dispatch(getChefs()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);