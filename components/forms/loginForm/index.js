import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import axios from 'axios'
import Cookies from 'js-cookie'
import validationSchema from './validation'
import Button from '../../button'
import InputField from '../../inputField'

const Login = () => {
  const router = useRouter()

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    isValid,
    handleBlur,
    touched,
    dirty,
    setFieldError,
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    async onSubmit(values) {
      try {
        const { data } = await axios.post('/api/auth', values)
        if (data.success) {
          Cookies.set('token', data.token)

          router.push('/profile')
        }
      } catch (error) {
        if (error.response) {
          setFieldError('password', error.response.data.error)
        }
      }
    },
  })

  return (
    <div className="h-auto pt-6 pb-8 mb-4 bg-white rounded w-[25rem] sm:w-[30rem] shadow-xl px-14">
      <h2 className="mb-2 font-bold text-center">WELCOME BACK</h2>
      <h6 className="mb-6 text-sm font-thin text-center">
        Login to manage your order
      </h6>
      <form>
        <InputField
          className="mb-4"
          name="email"
          type="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          onBlur={handleBlur}
          edited={touched}
          value={values.email}
          errorMessage={errors.email}
        />
        <InputField
          className="mb-2"
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          edited={touched}
          value={values.password}
          errorMessage={errors.password}
        />
        <div className="flex items-center justify-center mt-8">
          <Button
            type="submit"
            disabled={!(isValid && dirty)}
            onClick={handleSubmit}
            name="Login"
            className={
              !(isValid && dirty)
                ? 'text-gray-600 bg-gray-200 cursor-not-allowed w-full font-bold'
                : 'bg-[#4E74A6] hover:bg-[#3c69a6] text-white w-full font-bold'
            }
          />
        </div>
      </form>
    </div>
  )
}

export default Login
