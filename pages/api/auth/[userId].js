import USERS from '../../../data/users.json'

export default function auth(req, res) {
  const { method } = req

  try {
    switch (method) {
      case 'GET':
        try {
          const { userId } = req.query

          const userData = USERS.filter((user) => user.id === +userId)

          res.json({ success: true, user: userData[0] })
        } catch (error) {
          res.json(error)
          res.status(405).end()
        }
        break
      case 'PUT':
        try {
          let newUser
          const { firstname, lastname, email, password } = req.body
          const { userId } = req.query

          const userData = USERS.filter((user) => user.id === +userId)
          const userIdx = USERS.findIndex((user) => user.id === +userId)

          // check if email already exist
          const emailExist = !!USERS.find(
            (user) => user.email === email && user.id !== +userId,
          )

          if (emailExist) {
            return res.json({ success: false, error: 'Email already exist' })
          }

          newUser = userData[0]

          newUser.firstname = firstname
          newUser.lastname = lastname
          newUser.email = email
          newUser.password = password

          USERS.splice(userIdx, 1, newUser)

          res.json({ success: true, user: newUser })
        } catch (error) {
          res.json(error)
          res.status(405).end()
        }
        break
      default:
        break
    }
  } catch (error) {
    throw error
  }
}
