import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import InNavbar from '../layout/InNavbar';
import OutNavbar from '../layout/OutNavbar';
import Option from './Option'
import uniqid from 'uniqid'
export default withAuth(
  class NewSnippet extends Component {
    state = { 
      authenticated: null,
      LANGUAGE_CHOICE : [
        {name:'JAVASCRIPT'},
        {name: 'CSS'},
        {name:'HTML'},
        {name:'C#'},
        {name:'C++'},
        {name: 'BASH'},
        {name:'APACHE'},
        {name:'XML'},
        {name:'PHP'},
        {name:'JSON'},
        {name: 'PERL'},
        {name: 'SQL'},
        {name: 'RUBY'},
        {name: 'PYTHON'},
        {name: 'OBJECTIVE-C'},
        {name: 'DIFF'},
        {name: 'JAVA'},
        {name: 'COFFEESCRIPT'},
        {name:'MAKEFILE'},
        {name: 'NGINX'}
      ],
      title:"",
      desc:"",
      content:"",
      language:""
    };

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
    getOps = () => {
      let op = [];
      this.state.LANGUAGE_CHOICE.forEach((element)=>{
        op.push(
        <Option value={element.name} key={uniqid()}/>
        )
      })
      return op;
    }
    handldInputChange = event =>{
      const {name,value}= event.target
      this.setState({
        [name]:value
      })
    }
    handleSubmit= (event)=>{
      event.preventDefault();
      console.log(this.state.title+"\n"+this.state.desc+"\n"+this.state.content+"\n"+this.state.language)
      window.location.replace('/')
    }
    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <div className="container">
            <InNavbar />
            <form>
              <div className="form-group">
                <label htmlFor="email">Snippet Title</label>
                <input name="title" onChange={this.handldInputChange} value={this.state.title} type="text" className="form-control" id="title" />
              </div>
                <div className="form-group">
                  <label htmlFor="language">Code Language</label>
                  <select name="language" onChange={this.handldInputChange} value={this.state.language} className="form-control" id="language">
                    {this.getOps()}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Snippet Description</label>
                  <textarea name="desc" onChange={this.handldInputChange} value={this.state.desc} className="form-control" id="desc" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="code">Snippet Code</label>
                  <textarea name="content" onChange={this.handldInputChange} value={this.state.content} className="form-control" id="code" rows="8"></textarea>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-lg">Snipp it</button>
            </form>
          </div>
        </div>
          ) : (
        <div>
            <OutNavbar />
            <p className="lead">
              if your are a registered Snipper go ahead and login
          </p>
            <button className="btn btn-dark btn-lg" onClick={this.login}>
              Login
          </button>
          </div>
          );
    
          return (
        <div className="jumbotron">
            {mainContent}
          </div>
          );
        }
      }
);