import React, { Component } from 'react'
import { authActions } from '../actions/auth.actions'
import {SignInForm} from '../../auth/components/SignInForm.component'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSate = this.updateSate.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(authActions.signIn(this.state));
  };

  updateSate(event) {
    this.setState({ [event.type]: event.value })
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <h1>Welcome Test</h1>
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

export default connect(mapStateToProps)(SignIn)