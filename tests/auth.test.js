import auth from '../pages/api/auth/index'

jest.mock('jsonwebtoken', () => ({
  ...jest.requireActual('jsonwebtoken'),
  sign: jest.fn().mockReturnValue('SECRET_KEY', {}),
}))

describe('Authentication', () => {
  let req, res

  beforeEach(() => {
    ;(req = {
      method: 'POST',
      body: { email: 'j.martins@gmail.com', password: 'password3' },
    }),
      (res = {
        status: jest.fn(() => res),
        end: jest.fn(),
        json: jest.fn(() => {}),
      })
  })

  it('should return error when not a post request', async () => {
    req.method = 'GET'

    const resp = await auth(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalledTimes(1)
  })

  describe('Login', () => {
    it('should return 404 error when no user found', async () => {
      req.body.email = 'newuser@mail.com'

      const resp = await auth(req, res)

      expect(res.status).toHaveBeenCalledWith(404)
      expect(res.json).toHaveBeenCalledWith(expect.any(Object))
      expect(res.json).toHaveBeenCalledTimes(1)
    })

    it('should return 401 error for wrong password', async () => {
      req.body.password = 'password'

      const resp = await auth(req, res)

      expect(res.status).toHaveBeenCalledWith(401)
      expect(res.json).toHaveBeenCalledWith(expect.any(Object))
      expect(res.json).toHaveBeenCalledTimes(1)
    })

    it('should login successfully', async () => {
      const resp = await auth(req, res)

      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalledWith(expect.any(Object))
      expect(res.json).toHaveBeenCalledTimes(1)
    })
  })
})
