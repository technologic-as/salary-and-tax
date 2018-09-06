import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';


export class UsersComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getUsers } = this.props;
        getUsers();
    }

    render() {
        const { isFetching, list } = this.props;
        return (
          <div>
            { isFetching && list.length === 0 && <h2>Loading...</h2> }
            { !isFetching && list.length === 0 && <h2>No users found.</h2> }
            { list.length > 0 && list.map(user => (
              <div key={user.userId} style={{ opacity: isFetching ? 0.5 : 1 }}>
                { user.name }
              </div>
)) }
          </div>
)
    }
}

UsersComponent.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.string.isRequired,
        cvId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    isFetching: PropTypes.bool.isRequired,
    getUsers: PropTypes.func.isRequired,
};


const mapStateToProps = ({ users: { list, isFetching } }) => ({
    list,
    isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
