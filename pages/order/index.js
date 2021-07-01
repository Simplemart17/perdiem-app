import Head from 'next/head'
import Link from 'next/link'
import USERS from '../../data/users.json'

const OrderPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>App | Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  )
}

export default OrderPage
