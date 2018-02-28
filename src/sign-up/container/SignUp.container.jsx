import React, { Component } from 'react';
import { SignUpForm } from '../components/SignUpForm.component';
import { userActions } from '../actions/user.actions';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSate = this.updateSate.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(userActions.signUp(this.state));
  };

  updateSate(event) {
    this.setState({ [event.id]: event.value })
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <SignUpForm
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

export default connect(mapStateToProps)(SignUp);