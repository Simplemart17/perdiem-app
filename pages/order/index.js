import Link from 'next/link'
import USERS from '../../data/users.json'
import Layout from '../../components/layout'

const OrderPage = () => {
  return (
    <Layout title="App | Order Page">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
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
