import { render, screen, cleanup, fireEvent, act } from '@testing-library/react'
import Login from '../pages/index'

afterEach(cleanup)

describe('Index page with login form', () => {
  it('renders login page', () => {
    render(<Login />)
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument()
    expect(screen.getByText(/Login to manage your order/i)).toBeInTheDocument()
  })

  it('renders two input components', () => {
    render(<Login />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders a login button', () => {
    render(<Login />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})

describe('Check login page form validation', () => {
  it('validate user inputs, and provides error messages', async () => {
    render(<Login />)

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email address/i), {
        target: { value: 'notvalid' },
      })
    })

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: 'pass' },
      })
    })

    expect(screen.getByText('The email must be valid')).toBeInTheDocument()
    expect(screen.getByText('The character is too short!')).toBeInTheDocument()
    expect(screen.getByTestId('button')).toBeDisabled()
  })

  it('check user input validation for correct details', async () => {
    render(<Login />)

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email address/i), {
        target: { value: 'test@mail.com' },
      })
    })

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: 'password1' },
      })
    })

    expect(screen.getByLabelText(/email address/i)).toHaveValue('test@mail.com')
    expect(
      screen.queryByText('The email must be valid'),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('This field cannot be empty'),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('The character is too short!'),
    ).not.toBeInTheDocument()
    expect(screen.getByTestId('button')).not.toHaveClass('cursor-not-allowed')
  })
})
