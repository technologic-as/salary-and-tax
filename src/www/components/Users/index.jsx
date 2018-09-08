import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, selectUser } from '../../actions';
import { Dropdown, Loading } from '../Ui';


export class UsersComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getUsers} = this.props;
        getUsers();
    }

    render() {
        const {isFetching, list, selectUser, selectedUser} = this.props;

        return (
          <div>
            { isFetching && list.length === 0 && <Loading /> }
            { !isFetching && list.length === 0 && <h2>No users found.</h2> }
            { list.length > 0 && (
            <Dropdown
              options={list}
              onChange={selectUser}
              selectedOption={selectedUser}
            />)}
          </div>)}
}

UsersComponent.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.string,
        cvId: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    isFetching: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired,
    selectUser: PropTypes.func.isRequired,
    selectedUser: PropTypes.shape({
        userId: PropTypes.string,
        cvId: PropTypes.string,
        name: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = ({users: {list, isFetching, selectedUser}}) => ({
    list,
    isFetching,
    selectedUser,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(fetchUsers()),
    selectUser: ({value}) => dispatch(selectUser(value)),
});

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
export default Users;
