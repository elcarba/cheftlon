import React from 'react';
import {connect} from 'react-redux';
import CustomPaper from "../../components/CustomPaper/CustomPaper";
import * as actions from '../../store/User/userActions';
import Loader from "../../components/Loader/Loader";
import UserForm from "../../components/UserForm/UserForm";
import {Grid} from "@material-ui/core";
import UserInfo from "../../components/UserInfo/UserInfo";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class CreateEditUser extends React.Component {
    componentDidMount(){
        const id = this.getUserIdParam();
        if(id){
            //Fetch User to edit
            this.props.onGetUser(id);
        }
    }

    componentWillUnmount() {
        //Reset User Data in redux
        this.resetUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.user._id !== this.props.user._id && !this.getUserIdParam()){
            //If user is created redirect to editUser
            this.props.history.push(`/users/${this.props.user._id}/edit`);
        }

        if(this.props.retrievingUserError){
            //Check if User fetched is empty then redirect
            this.props.history.push("/users");
        }
    }

    resetUserData = () => {
        this.props.onChangeUser({
            name: '',
            email: '',
            password: '',
            isAdmin: false,
            avatar: null,
            avatarChanged: false
        });
    };

    getUserIdParam = () => {
        const params = this.props.match.params;
        return params.id;
    };

    onSubmitForm = (user) => {
        //Append Avatar into req
        if(this.props.user.avatarChanged)
            user.avatar = this.props.user.avatar;
        else
            user.avatar = null;

        //Change User Data in redux
        this.props.onChangeUser(user);

        if(this.getUserIdParam()){
            this.props.onUpdateUser(user);
        }else{
            this.props.onCreateUser(user);
        }
    };

    onChangeImage = (image) => {
        this.props.onChangeUser({
            ...this.props.user,
            avatar: image,
            avatarChanged: true
        });
    };

    render(){
        const paramId = this.getUserIdParam();
        const { user, isLoading, error } = this.props;

        return (
            <>
                <Loader isLoading={isLoading} />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Link to='/users'>
                            <ArrowBackIosIcon fontSize={"small"} className="back_link"/> Go Back
                        </Link>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <UserInfo
                            picture={user.avatar}
                            name={user.name}
                            onUpload={this.onChangeImage}
                        />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <CustomPaper title={`${paramId ? 'Edit User':'New User'}`}>
                            <UserForm
                                initValues={user}
                                type={'account'}
                                submitTxt={'Save'}
                                editing={paramId && paramId !== ''}
                                submitting={isLoading}
                                error={error}
                                onSubmitHandler={this.onSubmitForm}
                                inAdmin
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
        user: state.userReducer.user,
        isLoading: state.userReducer.isLoading,
        error: state.userReducer.error,
        retrievingUserError: state.userReducer.retrievingUserError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(actions.createUser(user)),
        onUpdateUser: user => dispatch(actions.updateUser(user)),
        onGetUser: id => dispatch(actions.getUser(id)),
        onChangeUser: user => dispatch(actions.changeUserData(user))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateEditUser);