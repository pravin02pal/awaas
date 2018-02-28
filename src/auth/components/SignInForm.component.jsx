import React from 'react'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Grid, Row } from 'react-bootstrap'

export const SignInForm = (props) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={5} md={5}>
        <h1>SignIn</h1>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={5} md={5}>
        <Form horizontal onSubmit={props.onSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" onChange={e => props.onChange(e.target)} placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" onChange={e => props.onChange(e.target)} placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  </Grid>
);