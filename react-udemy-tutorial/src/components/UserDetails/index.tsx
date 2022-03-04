import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

class UserDetails extends React.Component<RouteComponentProps> {
    goHome = () => {
        history.push('/');
    }
    render() {
        return (
            <div>
                <h1> User Details </h1>
                <button onClick={this.goHome}>Go Home</button>
            </div>
        )
    }
}

export default withRouter(UserDetails);