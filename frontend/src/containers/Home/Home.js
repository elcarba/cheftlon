import React, { Component } from 'react';
import {Box, Divider, Typography} from "@material-ui/core";
import CardList from "../../components/CardList/CardList";
import {getChefs} from "../../store/ChefList/chefListActions";
import {connect} from "react-redux";

class Home extends Component {
    componentDidMount(){
        //Fetch All Chefs
        this.props.onGetChefs();
    }

    render() {
        return (
            <>
                <Typography className="text-center" gutterBottom variant="h4" color="textPrimary">
                    Popular Chefs around the world
                </Typography>
                <Divider />
                <br/>
                <Box mt={3}>
                    <CardList list={this.props.chefs}/>
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