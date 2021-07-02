import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPen,
  faCartPlus,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { verifyToken, getAppCookies, logout } from '../../middleware/utils'
import EditProfile from '../../components/editProfile'
import protectedRoute from '../protectedRoute'
import { useRouter } from 'next/router'
import ProfileDetails from '../../components/details'
import Layout from '../../components/layout'

const Profile = ({ profile }) => {
  const router = useRouter()
  const [editProfile, setEditProfile] = useState(false)
  const [user, setUser] = useState()

  const { id } = profile

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`/api/auth/${id}`)
      setUser(data.user)
    }

    fetch()
  }, [editProfile, id])

  return (
    <Layout title="App | Profile Page">
      <div className="relative md:w-[36rem] sm:mx-auto">
        <div className="relative flex z-10 w-24 h-24 p-1 mt-[-15%] m-auto bg-[#f3f1f1] rounded-2xl top-16 border border-[#3d63ca]">
          <Image
            src="https://res.cloudinary.com/drmrayjr0/image/upload/v1559304041/profile_mbyrmu.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-2xl"
          />
        </div>
        {!editProfile && (
          <div className="block">
            <div
              className="absolute flex z-10 items-center cursor-pointer w-[30%] h-10 p-1 left-[32.5rem] top-32 bg-[#f3f1f1] rounded-lg border border-white"
              onClick={() => {
                setEditProfile(true)
              }}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-400 rounded-l-lg">
                <FontAwesomeIcon icon={faPen} color="#FFFFFF" className="w-5" />
              </div>
              <p className="ml-2 font-bold">Edit Profile</p>
            </div>
            <div
              className="absolute flex z-10 items-center cursor-pointer w-[30%] h-10 p-1 left-[32.5rem] top-48 bg-[#f3f1f1] rounded-lg border border-white"
              onClick={() => router.push('/order')}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-400 rounded-l-lg">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  color="#FFFFFF"
                  className="w-5"
                />
              </div>
              <p className="ml-2 font-bold">Manage Order</p>
            </div>
            <div
              className="absolute flex z-10 items-center cursor-pointer w-[30%] h-10 p-1 left-[32.5rem] top-64 bg-[#f3f1f1] rounded-lg border border-white"
              onClick={logout}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-400 rounded-l-lg">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  color="#FFFFFF"
                  className="w-5"
                />
              </div>
              <p className="ml-2 font-bold">Logout</p>
            </div>
          </div>
        )}
        <div className="relative p-10 bg-white border border-gray-200 shadow-xl sm:rounded-lg bg-clip-padding bg-opacity-60">
          {!editProfile && <ProfileDetails user={user} />}
          {editProfile && (
            <EditProfile
              user={user}
              setEditProfile={setEditProfile}
              userId={id}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { req } = context

  const { token } = getAppCookies(req)
  const profile = token ? verifyToken(token) : ''

  return {
    props: {
      profile,
    },
  }
}

export default protectedRoute(Profile)
