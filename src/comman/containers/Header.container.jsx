import React, { Component } from 'react'
import { HeaderForm } from '../components/HeaderForm.component'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <HeaderForm
        isLoggedIn={this.props.isLoggedIn}
      />
    )
  };
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Header);