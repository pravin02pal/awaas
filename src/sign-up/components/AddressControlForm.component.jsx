import React from 'react'
import { FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

export const AddressControlForm = (props) => (
  <div>
    <FormGroup controlId="street">
      <Col componentClass={ControlLabel} sm={2}>
        Street
      </Col>
      <Col sm={10}>
        <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="Street Address" />
      </Col>
    </FormGroup>

    <FormGroup controlId="city">
      <Col componentClass={ControlLabel} sm={2}>
        City
      </Col>
      <Col sm={10}>
        <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="City" />
      </Col>
    </FormGroup>

    <FormGroup controlId="state">
      <Col componentClass={ControlLabel} sm={2}>
        State
      </Col>
      <Col sm={10}>
        <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="State" />
      </Col>
    </FormGroup>

    <FormGroup controlId="zipCode">
      <Col componentClass={ControlLabel} sm={2}>
        Zip Code
      </Col>
      <Col sm={10}>
        <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="Zip Code" />
      </Col>
    </FormGroup>

    <FormGroup controlId="phNo">
      <Col componentClass={ControlLabel} sm={2}>
        Phone Number
      </Col>
      <Col sm={10}>
        <FormControl type="text" onChange={e => props.onChange(e.target)} placeholder="Phone Number" />
      </Col>
    </FormGroup>
  </div>
);