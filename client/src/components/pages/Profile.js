import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import InNavbar from '../layout/InNavbar';
import OutNavbar from '../layout/OutNavbar';

export default withAuth(
  class Profile extends Component {
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
          <InNavbar logout={this.logout} />
          <div className="container bootstrap snippet">
            <div className="row">
              <div className="col-sm-10"><h1>Alaa Al Shammari</h1></div>
              <div className="col-sm-2"><a href="/users" className="pull-right">
              <img alt="prof" title="profile image" className="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" /></a></div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="text-center">
                  <img src="favicon.ico" className="avatar img-circle img-thumbnail" alt="avatar" />
                  <h6>Upload a different photo...</h6>
                  <input type="file" className="text-center center-block file-upload" />
                </div>
                <br></br>
                <ul className="list-group">
                  <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                  <li className="list-group-item text-left"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                  <li className="list-group-item text-left"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                </ul>
              </div>
                  <form className="form" action="##" method="post" id="registrationForm">
                    <div className="form-group">
                        <label htmlFor="first_name"><h4>First name</h4></label>
                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name"><h4>Last name</h4></label>
                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                    </div>

                    <div className="form-group">

                        <label htmlFor="phone"><h4>Phone</h4></label>
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                    </div>

                    <div className="form-group">
                          <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                          <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                    </div>
                  </form>
            </div>
          </div>
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