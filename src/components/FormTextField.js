import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';

const FormTextField = ({ label, ...props }) => {
  const [ field, meta ] = useField(props);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        {...field}
        {...props}
      />
      { meta.touched && meta.error && <div className='mt-2 text-danger'>{meta.error}</div> }
    </Form.Group>
  )
}

export default FormTextField;
