import React from 'react';
import { withRouter } from 'react-router-dom';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age,
            email: this.props.email
        }
    }

    handleUserRedirect = () => {
        // This is a way we can send state or data from one page to another
        // this is regardless of the level in the tree
        this.props.history.push({
            pathname: '/about',
            state: { user: this.state }
        })
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value })
    }

    render() {
        const { name, age, email } = this.state;
        return (
            <div>
                // The form uses the onSubmit to send data from child to parent
                // The method sends the event and the state up intot the UserList component
                <form onSubmit={(event) => this.props.editUser(event, this.state)}>
                    <input value={name} name="name" onChange={this.handleChange} />
                    <input value={age} name="age" onChange={this.handleChange} />
                    <input value={email} name="email" onChange={this.handleChange} />
                    <button type="submit">Update User</button>
                </form>
                <button onClick={this.handleUserRedirect}>Send user to about page</button>
            </div>
        )
    }
}

export default withRouter(User);