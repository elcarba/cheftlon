import React from 'react';
import {connect} from 'react-redux';
import CustomPaper from "../../components/CustomPaper/CustomPaper";
import FloatingAddButton from "../../components/FloatingAddButton/FloatingAddButton";
import Table from "../../components/Table/Table";
import { getChefs } from '../../store/ChefList/chefListActions';
import { deleteChef } from '../../store/Chef/chefActions';
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import {Avatar} from "@material-ui/core";

class Chefs extends React.Component {
    state = {
        modalOpen: false,
        chefIdSelected: null
    };

    componentDidMount(){
        //Fetch All Chefs
        this.props.onGetChefs();
    }

    onEditRow = (chefId) => {
        this.props.history.push(`/chefs/${chefId}/edit`);
    };

    onDeleteRow = (chefId) => {
        this.setState({
            ...this.state,
            modalOpen: true,
            chefIdSelected: chefId
        });
    };

    onAddHandler = () => {
       this.props.history.push("/chefs/new");
    };

    handleDeleteChef = () => {
        const { chefIdSelected } = this.state;
        this.props.onDeleteChef(chefIdSelected);
    };

    onRetrieveChefs = (chefs) => {
        /* Add custom rendering to cells */
        return chefs.map((chef) => {
            chef.image = <Avatar src={chef.imgUrl} alt={chef.name} />;
            chef.bio = <p className="long-truncate">{ chef.biography }</p>;
            return chef;
        });
    }

    handleCloseModal = () => {
        this.setState({
            ...this.state,
            modalOpen: false
        });
    };

    renderTable = () => {
        const { chefs } = this.props;
        return <Table
            withActions={{
                onEditClick: this.onEditRow,
                onDeleteClick: this.onDeleteRow
            }}
            rowsHead={{
                name: "Name",
                image: "Image",
                bio: "Biography",
                country: "Country",
                sumScore: "Rating",
                totalScore: "Total Ratings",
            }}
            rowsBody={this.onRetrieveChefs(chefs)}
        />;
    };

    render(){
        return (
            <>
                <Loader isLoading={this.props.isLoading} />
                <CustomPaper title={"Chefs"}>
                    { this.renderTable() }
                </CustomPaper>

                <FloatingAddButton onClickHandler={this.onAddHandler}/>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleCloseModal}
                    title={"Attention!"}
                    description={"Are you sure you want to delete?"}
                    onProceed={this.handleDeleteChef}
                    onProceedLabel="Yes"
                />
            </>
        );
    }
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
        onDeleteChef: (id) => dispatch(deleteChef(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chefs);