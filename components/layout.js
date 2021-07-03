import Head from 'next/head'
import SideBar from './sidebar'

const Layout = ({
  children,
  title,
  editProfile,
  logout,
  setEditProfile,
  gotoProfile,
}) => {
  return (
    <div className="flex bg-gradient-to-b from-white via-[#023d55] to-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[20rem] md:block lg:w-1/5 md:w-[30%]">
        <SideBar
          editProfile={editProfile}
          logout={logout}
          setEditProfile={setEditProfile}
          gotoProfile={gotoProfile}
        />
      </div>
      <div className="w-full h-screen md:w-[70%] lg:w-4/5">{children}</div>
    </div>
  )
}

export default Layout
