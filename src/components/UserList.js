import React from 'react';
import User from './User';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'John',
                age: 34,
                email: 'john@gmail.com'
            }
        }
    }

    editUser = (event, updatedUser) => {
        // The event.preventDefault() stops the page from refreshing this is 
        // default behaviour of a form
        event.preventDefault();
        this.setState({ user: updatedUser })
    }



    render() {
        return (
            <div>
                <h1>Welcome to the UserList Component</h1>
                // 1. We are passing data from parent to child via the spread operator
                // 2. We are passing a method as props to create the connection between
                // parent and child.
                <User {...this.state.user} editUser={this.editUser} />
            </div>
        )
    }
}

export default UserList;