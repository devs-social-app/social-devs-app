import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import InNavbar from '../layout/InNavbar';
import OutNavbar from '../layout/OutNavbar';
import Snippets from './Snippets';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        
        <div>
        <InNavbar logout={this.logout}/>
          <Snippets />
        </div>
      ) : (
        <div>
        <OutNavbar />
          <p className="lead">
            If you are a staff member, please get your credentials from your
            supervisor
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="container">
          {mainContent}
        </div>
      );
    }
  }
);