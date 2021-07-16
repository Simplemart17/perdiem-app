import USERS from '../../../data/users.json'

export default function auth(req, res) {
  const { method } = req

  if (method === 'GET') {
    const { userId } = req.query

    const userData = USERS.filter((user) => user.id === +userId)

    return res.status(200).json({ success: true, user: userData[0] })
  } else if (method === 'PUT') {
    const { firstname, lastname, email, password } = req.body
    const { userId } = req.query

    const userData = USERS.filter((user) => user.id === +userId)
    const userIdx = USERS.findIndex((user) => user.id === +userId)

    // check if email already exist
    const emailExist = !!USERS.find(
      (user) => user.email === email && user.id !== +userId,
    )

    if (emailExist) {
      return res
        .status(400)
        .json({ success: false, error: 'Email already exist' })
    }

    let newUser = userData[0]

    newUser.firstname = firstname
    newUser.lastname = lastname
    newUser.email = email
    newUser.password = password

    USERS.splice(userIdx, 1, newUser)

    return res.status(201).json({ success: true, user: newUser })
  }
}
