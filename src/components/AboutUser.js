import React from 'react';

class AboutUser extends React.Component {
    render() {
        // We are destructuring the data send across from UserList 
        // to this component

        // Remember we can refresh the page and still have this data
        // if we redirect back to this page from somewhere else this data will be lost
        const { user } = this.props.location.state;
        return (
            <div>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
            </div>
        )
    }
}

export default AboutUser;