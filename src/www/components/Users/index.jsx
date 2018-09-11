import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, selectUser } from '../../actions';
import { Dropdown, Loading, Section } from '../Ui';


export class UsersComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getUsers} = this.props;
    getUsers();
  }

  render() {
    const {isFetching, list, selectUser, selectedUser, isLoaded} = this.props;

    const hasUsers = list.length > 0;
    const header = isLoaded && hasUsers ? 'Users' : 'No users found';

    return (
      <Section header={header}>
        { isFetching && <Loading /> }
        { isLoaded && hasUsers && (
        <Dropdown
          options={list}
          onChange={selectUser}
          selectedOption={selectedUser}
        />
) }
      </Section>
)
  }
}

UsersComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string,
    cvId: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    userId: PropTypes.string,
    cvId: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = ({users: {list, isFetching, isLoaded, selectedUser}}) => ({
  list,
  isFetching,
  isLoaded,
  selectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
  selectUser: ({value}) => dispatch(selectUser(value)),
});

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
export default Users;
