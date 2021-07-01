import Head from 'next/head'
import LoginForm from '../../components/forms/loginForm'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>App | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <LoginForm />
      </main>
    </div>
  )
}
