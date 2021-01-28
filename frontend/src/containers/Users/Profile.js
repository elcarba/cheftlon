import React from 'react';
import {connect} from 'react-redux';
import CustomPaper from "../../components/CustomPaper/CustomPaper";
import * as actions from '../../store/Auth/authActions';
import Loader from "../../components/Loader/Loader";
import UserForm from "../../components/UserForm/UserForm";
import {Grid} from "@material-ui/core";
import UserInfo from "../../components/UserInfo/UserInfo";

class Profile extends React.Component {
    componentDidMount(){
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if(userInfo && userInfo.hasOwnProperty("_id")){
            //Fetch User Profile
            this.props.onGetProfile();
        }
    }

    onSubmitForm = (user) => {
        //Append Avatar into req
        if(this.props.user.avatarChanged)
            user.avatar = this.props.user.avatar;
        else
            user.avatar = null;

        this.props.onUpdateProfile(user);
    };

    onChangeImage = (image) => {
        this.props.onChangeData({
            ...this.props.user,
            avatar: image,
            avatarChanged: true
        });
    };

    render(){
        const { user, isLoading, error } = this.props;

        return (
            <>
                <Loader isLoading={isLoading} />
                <Grid
                    container
                    spacing={3}
                >
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
                        <CustomPaper title={`Profile`}>
                            <UserForm
                                initValues={user}
                                type={'account'}
                                submitTxt={'Save'}
                                editing={true}
                                submitting={isLoading}
                                error={error}
                                onSubmitHandler={this.onSubmitForm}
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
        user: state.authReducer.currentUser,
        isLoading: state.authReducer.isLoading,
        error: state.authReducer.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateProfile: (user) => dispatch(actions.updateUserProfile(user)),
        onGetProfile: () => dispatch(actions.getUserProfile()),
        onChangeData: (user) => dispatch(actions.changeData(user)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);