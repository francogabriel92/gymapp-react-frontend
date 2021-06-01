import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';

const FormTexttField = ({ label, ...props }) => {
  const [ field, meta ] = useField(props);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        {...field}
        {...props}
      />
      { meta.touched && meta.error && <ErrorMessage className='invalid-feedback' name={props.name} />}
    </Form.Group>
  )
}

export default FormTexttField;
