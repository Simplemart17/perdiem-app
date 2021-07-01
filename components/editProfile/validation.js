import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstname: Yup.string()
    .required('This field is required')
    .min(3, 'Character is too short')
    .matches(
      /^(?!.*--)(?!.*[ ]{2})[a-zA-Z0-9](?:[a-zA-Z0-9- ]*[a-zA-Z0-9])?$/,
      'First Name may only contain alphanumeric characters and single hyphens and cannot begin or end with a hypen',
    ),
  lastname: Yup.string()
    .required('This field is required')
    .min(3, 'Character is too short')
    .matches(
      /^(?!.*--)(?!.*[ ]{2})[a-zA-Z0-9](?:[a-zA-Z0-9- ]*[a-zA-Z0-9])?$/,
      'Last Name may only contain alphanumeric characters and single hyphens and cannot begin or end with a hypen',
    ),
  email: Yup.string()
    .required('This field is required')
    .email('The email must be valid'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'password must be at least 6 charaters long and contain at least one letter and one number',
    )
    .required('This field can not be empty'),
})

export default validationSchema
