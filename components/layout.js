import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-6 bg-gradient-to-b from-white via-[#023d55] to-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
