import React from 'react'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Grid, Row } from 'react-bootstrap'
import { AddressControlForm } from './AddressControlForm.component';

export const SignUpForm = (props) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={5} md={5}>
        <h1>SignUp</h1>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={5} md={5}>
        <Form horizontal onSubmit={props.onSubmit}>
          <FormGroup controlId="name">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" onChange={e => props.onChange(e.target)} placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" onChange={e => props.onChange(e.target)} placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Confirm Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" onChange={e => props.onChange(e.target)} placeholder="Confirm Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="addressForm">
            <Col componentClass={ControlLabel} sm={2}>
              Address
            </Col>
            <Col sm={10}>
              <AddressControlForm onChange={e => props.onChange(e)} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign Up</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  </Grid>
);