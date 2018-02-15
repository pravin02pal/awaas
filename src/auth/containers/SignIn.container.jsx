import React, { Component } from 'react'
import {SignInForm} from '../../auth/components/SignInForm.component'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSate = this.updateSate.bind(this);
  }

  handleClick() {

  };

  updateSate(event) {
    this.setState({ [event.type]: event.value })
  }

  render() {
    return (
      <SignInForm
        onChange={(data) => this.updateSate(data)}
        onSubmit={this.handleClick}
      />
    )
  };
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(SignIn)