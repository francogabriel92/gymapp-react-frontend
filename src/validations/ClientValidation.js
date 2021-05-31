import * as yup from 'yup';

const clientSchema = yup.object().shape({
  name: yup.string().required('Is required'),
  mail: yup.string().email('Enter a valid e-mail'),
  address: yup.string(),
  city: yup.string(),
  birthDate: yup.date().max(new Date(),'Invalid date').min(new Date('1900-01-01'),'Must be after 1900'),
  phone: yup.string(),
  gender: yup.string().required('Is required'),
})

export default clientSchema;