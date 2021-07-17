import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import Input from '../inputField'
import Button from '../button'
import validationSchema from './validation'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const EditProfile = ({ user, setEditProfile, userId }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    isValid,
    dirty,
    errors,
    setErrors,
    resetForm,
    setFieldError,
  } = useFormik({
    initialValues: user,
    validationSchema,
    async onSubmit(values) {
      try {
        setIsLoading(true)
        const { data } = await axios.put(`/api/auth/${userId}`, values)
        if (data.success) {
          setEditProfile(false)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        if (error.response) {
          setFieldError('email', error.response.data.error)
        }
      }
    },
  })

  return (
    <div className="flex-1">
      <div className="mt-10 shadow-md">
        <div className="flex items-center h-10 border bg-[#79bde4] border-[#79bde4]">
          <h1 className="px-5 font-bold text-white">Edit Profile Details</h1>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap justify-between mt-5">
            <Input
              name="firstname"
              id="firstname"
              className="w-full mb-2"
              errorMessage={errors.firstname}
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              edited={touched}
              value={values.firstname}
            />
            <Input
              className="w-full mb-2"
              name="lastname"
              id="lastname"
              errorMessage={errors.lastname}
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              edited={touched}
              value={values.lastname}
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <Input
              name="email"
              id="email"
              className="w-full mb-2"
              errorMessage={errors.email}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              edited={touched}
              value={values.email}
            />
            <Input
              className="w-full mb-2"
              name="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              errorMessage={errors.password}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              edited={touched}
              value={values.password}
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          disabled={!(isValid && dirty) || isLoading}
          className={
            !(isValid && dirty) || isLoading
              ? 'text-gray-600 bg-gray-200 cursor-not-allowed border border-gray-300 w-full font-bold'
              : 'bg-[#4E74A6] hover:bg-[#3c69a6] text-white w-full font-bold'
          }
          isLoading={isLoading}
          name="Update"
          onClick={handleSubmit}
        />
        <Button
          type="submit"
          className="w-full mt-4 font-bold text-gray-600 bg-gray-100 border"
          name="Cancel"
          onClick={() => {
            setEditProfile(false)
            resetForm()
            setErrors({})
          }}
        />
      </div>
    </div>
  )
}

export default EditProfile
