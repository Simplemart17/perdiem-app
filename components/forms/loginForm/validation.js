import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string()
    .required('This field cannot be empty')
    .email('The email must be valid'),
  password: Yup.string()
    .required('This field cannot be empty')
    .min(6, 'The character is too short!'),
})

export default validationSchema
