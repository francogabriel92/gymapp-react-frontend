import { useState } from 'react';

const UseForm = ( initialValues, schema ) => {
  const [ values, setValues ] = useState(initialValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const validation = await schema.isValid(values);
    console.log(validation);
  }

  return { values, setValues, handleInputChange, handleSubmit}
};

export default UseForm;