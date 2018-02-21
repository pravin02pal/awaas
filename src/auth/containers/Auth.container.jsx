import React, { Component } from 'react';
import { authActions } from '../actions/auth.actions';
import { SignInForm } from '../../auth/components/SignInForm.component';
import { connect } from 'react-redux';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSate = this.updateSate.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(authActions.signIn(this.state));
  };

  updateSate(event) {
    this.setState({ [event.type]: event.value })
  }

  signOut(data) {
    this.props.dispatch(authActions.signOut());
  }

  componentWillMount() {
    if (this.props.match.path === '/signout') {
      this.signOut();
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <SignInForm
          onChange={(data) => this.updateSate(data)}
          onSubmit={this.handleSubmit}
        />
      )
    }
  };
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Auth);