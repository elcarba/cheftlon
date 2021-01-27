import React from 'react';
import {connect} from 'react-redux';
import CustomPaper from "../../components/CustomPaper/CustomPaper";
import FloatingAddButton from "../../components/FloatingAddButton/FloatingAddButton";
import Table from "../../components/Table/Table";
import CheckIcon from '@material-ui/icons/Check';
import { getUsers } from '../../store/UserList/userListActions';
import { deleteUser } from '../../store/User/userActions';
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";

class Users extends React.Component {
    state = {
        modalOpen: false,
        userIdSelected: null
    };

    componentDidMount(){
        //Fetch All Users
        this.props.onGetUsers();
    }

    onEditRow = (userId) => {
        this.props.history.push(`/users/${userId}/edit`);
    };

    onDeleteRow = (userId) => {
        this.setState({
            ...this.state,
            modalOpen: true,
            userIdSelected: userId
        });
    };

    onAddHandler = () => {
       this.props.history.push("/users/new");
    };

    handleDeleteUser = () => {
        const { userIdSelected } = this.state;
        this.props.onDeleteUser(userIdSelected);
    };

    onRetrieveUsers = (users) => {
        return users.map((user) => {
            if(user.isAdmin)
                user.admin = <CheckIcon/>;
            else
                user.admin = '-';

            return user;
        });
    }

    handleCloseModal = () => {
        this.setState({
            ...this.state,
            modalOpen: false
        });
    };

    renderTable = () => {
        const { users } = this.props;
        return <Table
            withActions={{
                onEditClick: this.onEditRow,
                onDeleteClick: this.onDeleteRow
            }}
            rowsHead={{
                name: "Name",
                email: "Email",
                admin: "Admin"
            }}
            rowsBody={this.onRetrieveUsers(users)}
        />;
    };

    render(){
        return (
            <>
                <Loader isLoading={this.props.isLoading} />
                <CustomPaper title={"Users"}>
                    { this.renderTable() }
                </CustomPaper>

                <FloatingAddButton onClickHandler={this.onAddHandler}/>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleCloseModal}
                    title={"Attention!"}
                    description={"Are you sure you want to delete?"}
                    onProceed={this.handleDeleteUser}
                    onProceedLabel="Yes"
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.userListReducer.users,
        isLoading: state.userListReducer.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers: () => dispatch(getUsers()),
        onDeleteUser: (id) => dispatch(deleteUser(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);