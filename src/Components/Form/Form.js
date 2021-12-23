import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from "react-bootstrap/ToggleButton";
import InputGroup from "react-bootstrap/InputGroup"

export default function RequestForm(props) {
  const { handleSubmit } = props
  const [input, setInput] = useState('')
  const [radioValue, setRadioValue] = useState('GET');
  const radios = [
    { name: 'GET', value: 'GET' },
    { name: 'POST', value: 'POST' },
    { name: 'PUT', value: 'PUT' },
    { name: 'PATCH', value: 'PATCH' },
    { name: 'DELETE', value: 'DELETE' },
  ];

  // Loading button while waiting on request
  // https://react-bootstrap.github.io/components/buttons/#button-loading-state

  // Input Groups
  // https://react-bootstrap.github.io/components/input-group/#input-group

  return (
    <Form>
      <Form.Group className="m-3" controlId="testFormUrlInput">
        <InputGroup>
          <InputGroup.Text>URL</InputGroup.Text>
          <Form.Control value={input} onChange={e => setInput(e.target.value)} required type="url" placeholder="https://example.com"/>
          <Button onClick={() => handleSubmit(radioValue, input)} variant="outline-primary" type="button">Submit</Button>
        </InputGroup>
      </Form.Group>
      <ButtonGroup vertical={!(window.screen.width > 320)} className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >{radio.name}
        </ToggleButton>))}
      </ButtonGroup>
      
    </Form>
  )
}
