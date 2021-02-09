import React, { Component } from 'react';
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {getChefs} from "../../store/ChefList/chefListActions";
import {connect} from "react-redux";
import ChefCard from "../../components/ChefCard/ChefCard";
import Loader from "../../components/Loader/Loader";
import ModalScreen from "../../components/Modal/ModalScreen/ModalScreen";
import RateChef from "../../components/RateChef/RateChef";
import {rateChef} from "../../store/Chef/chefActions";

class Home extends Component {
    state = {
        modalOpen: false,
        ratingChef: null
    };

    componentDidMount(){
        //Fetch All Chefs
        this.props.onGetChefs();
    }

    onRateChef = (chef) => {
        this.setState({
            ...this.state,
            modalOpen: true,
            ratingChef: chef
        });
    };

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
                                <ChefCard
                                    {...chef}
                                    onStarClick={() => this.onRateChef(chef)}
                                />
                            </Grid>
                        );
                    })
                }

            </Grid>
        );
    };

    handleCloseModal = () => {
        this.setState({
            ...this.state,
            modalOpen: false
        });
    };

    handleRatingChef = (rateVal) => {
        this.handleCloseModal();
        this.props.onRateChef(this.state.ratingChef._id, rateVal);
    };

    render() {
        return (
            <>
                <Loader isLoading={this.props.isLoading} />
                <Typography className="text-center" gutterBottom variant="h4" color="textPrimary">
                    Popular Chefs around the world
                </Typography>
                <Divider />
                <br/>
                <Box mt={3}>
                    { this.renderGridCard() }
                </Box>
                <ModalScreen
                    open={this.state.modalOpen}
                    onClose={this.handleCloseModal}
                    title={"Rate your chef"}
                    content={
                        <RateChef
                            { ...this.state.ratingChef }
                            onRateChange={this.handleRatingChef}
                        />
                    }
                />
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
        onRateChef: (id, val) => dispatch(rateChef(id, val)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);