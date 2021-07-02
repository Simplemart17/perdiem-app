import Head from 'next/head'
import SideBar from './sidebar'

const Layout = ({ children, title, editProfile, logout, setEditProfile }) => {
  return (
    <div className="flex bg-gradient-to-b from-white via-[#023d55] to-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar
        editProfile={editProfile}
        logout={logout}
        setEditProfile={setEditProfile}
      />
      {children}
    </div>
  )
}

export default Layout
