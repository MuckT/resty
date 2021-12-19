import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from "react-bootstrap/ToggleButton";

export default function RequestForm(props) {
  const { handleSubmit } = props
  const [input, setInput] = useState('')
  const [radioValue, setRadioValue] = useState('');
  const radios = [
    { name: 'GET', value: 'GET' },
    { name: 'POST', value: 'POST' },
    { name: 'PUT', value: 'PUT' },
    { name: 'PATCH', value: 'PATCH' },
    { name: 'DELETE', value: 'DELETE' },
  ];

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Url</Form.Label>
        <Form.Control value={input} onChange={e => setInput(e.target.value)} required type="url" placeholder="https://example.com" />
        <Form.Text className="text-muted">
          Enter the full url of the resource you would like to explore
        </Form.Text>
      </Form.Group>
      <ButtonGroup className="mb-2">
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
          >{radio.name}</ToggleButton>))}
      </ButtonGroup>
      <Button onClick={() => handleSubmit(radioValue, input)} className="mb-2" type="button">Submit</Button>
    </Form>
  )
}
