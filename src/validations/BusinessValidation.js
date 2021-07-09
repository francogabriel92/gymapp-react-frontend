import * as yup from 'yup';

const businessSchema = yup.object().shape({
  name: yup.string().required('Is required'),
  password: yup.string().required('Is required').min(6, 'Must have at least 6 characters long'),
  username: yup.string().required('Is required'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('You need to confirm your password')
});

export default businessSchema;