import { useState } from 'react'
import Link from 'next/link'
import USERS from '../../data/users.json'
import Layout from '../../components/layout'
import { logout } from '../../middleware/utils'

const OrderPage = () => {
  const [editProfile, setEditProfile] = useState(false)
  return (
    <Layout
      title="App | Order Page"
      setEditProfile={setEditProfile}
      editProfile={editProfile}
      logout={logout}
    >
      <main className="md:w-[36rem] sm:mx-auto py-20 min-h-screen text-center">
        <p>Welcome</p>
        <Link href="/profile">
          <a>Go to profile</a>
        </Link>
        <div>
          {USERS.map((data) => (
            <div key={data.id}>
              <p>{data.firstname}</p>
              <p>{data.lastname}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default OrderPage
