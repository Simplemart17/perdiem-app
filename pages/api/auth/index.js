// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken'
import USERS from '../../../data/users.json'

const PRIVATE_KEY = process.env.JWT_KEY

export default async function auth(req, res) {
  const { method } = req

  if (method !== 'POST') {
    return res.status(405).end()
  }

  const { email, password } = req.body

  const user = USERS.find((user) => {
    return user.email === email
  })

  if (!user) {
    return res.status(404).json({ success: false, error: 'No user found' })
  }

  if (user) {
    const userId = user.id,
      userEmail = user.email,
      userPassword = user.password

    const isMatch = userPassword === password

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Email/password is incorrect',
      })
    }

    const payload = {
      id: userId,
      email: userEmail,
    }

    const token = jwt.sign(payload, PRIVATE_KEY, {
      expiresIn: 31556926,
    })

    return res.status(200).json({ success: true, token })
  }
}
