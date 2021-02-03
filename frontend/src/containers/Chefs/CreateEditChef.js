import React from 'react';
import {connect} from 'react-redux';
import CustomPaper from "../../components/CustomPaper/CustomPaper";
import * as actions from '../../store/Chef/chefActions';
import Loader from "../../components/Loader/Loader";
import {Grid} from "@material-ui/core";
import ChefForm from "../../components/ChefForm/ChefForm";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class CreateEditChef extends React.Component {
    componentDidMount(){
        const id = this.getChefIdParam();
        if(id){
            //Fetch Chef to edit
            this.props.onGetChef(id);
        }
    }

    componentWillUnmount() {
        //Reset Chef Data in redux
        this.resetChefData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.chef._id !== this.props.chef._id && !this.getChefIdParam()){
            //If chef is created redirect to editChef
            this.props.history.push(`/chefs/${this.props.chef._id}/edit`);
        }
    }

    resetChefData = () => {
        this.props.onChangeChef({
            _id: '',
            name: '',
            biography: '',
            country: '',
            imgUrl: '',
            sumScore: 0,
            totalScore: 0
        });
    };

    getChefIdParam = () => {
        const params = this.props.match.params;
        return params.id;
    };

    onSubmitForm = (chef) => {
        //Change Chef Data in redux
        this.props.onChangeChef(chef);

        if(this.getChefIdParam()){
            this.props.onUpdateChef(chef);
        }else{
            this.props.onCreateChef(chef);
        }
    };

    render(){
        const paramId = this.getChefIdParam();
        const { chef, isLoading, error } = this.props;

        return (
            <>
                <Loader isLoading={isLoading} />
                <Grid
                    container
                    spacing={3}
                    justify="center"
                >
                    <Grid item xs={12}>
                        <Link to='/chefs'>
                            <ArrowBackIosIcon fontSize={"small"} className="back_link"/> Go Back
                        </Link>
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={8}
                        xs={12}
                    >
                        <CustomPaper title={`${paramId ? 'Edit Chef':'New Chef'}`}>
                            <ChefForm
                                initValues={chef}
                                editing={paramId && paramId !== ''}
                                submitting={isLoading}
                                error={error}
                                onSubmitHandler={this.onSubmitForm}
                                isEnableReInit={paramId && paramId !== ''}
                            />
                        </CustomPaper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        chef: state.chefReducer.chef,
        isLoading: state.chefReducer.isLoading,
        error: state.chefReducer.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateChef: chef => dispatch(actions.createChef(chef)),
        onUpdateChef: chef => dispatch(actions.updateChef(chef)),
        onGetChef: id => dispatch(actions.getChef(id)),
        onChangeChef: chef => dispatch(actions.changeChefData(chef))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateEditChef);