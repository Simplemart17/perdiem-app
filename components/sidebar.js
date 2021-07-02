import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPen,
  faCartPlus,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

const SideBar = ({ logout, editProfile, setEditProfile }) => {
  const router = useRouter()
  return (
    <div className="fixed lg:w-1/5 w-2/6 h-screen mt-0 text-sm font-normal text-white bg-[#023d55]">
      <nav className="pl-4 mt-36">
        <div
          className={`${
            editProfile ? 'bg-blue-400' : 'bg-[#f3f1f1] hover:bg-gray-300'
          } flex z-10 items-center cursor-pointer w-full mb-6 h-10 p-1 left-[32.5rem] top-32  rounded-l-lg border border-none `}
          onClick={() => {
            setEditProfile(true)
          }}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-l-lg">
            <FontAwesomeIcon icon={faPen} color="#FFFFFF" className="w-5" />
          </div>
          <p className="ml-2 font-bold text-black">Edit Profile</p>
        </div>
        <div
          className="flex z-10 items-center cursor-pointer w-full mb-6 h-10 p-1 left-[32.5rem] top-48 bg-[#f3f1f1] rounded-l-lg border border-none hover:bg-gray-300"
          onClick={() => router.push('/order')}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-l-lg">
            <FontAwesomeIcon
              icon={faCartPlus}
              color="#FFFFFF"
              className="w-5"
            />
          </div>
          <p className="ml-2 font-bold text-black">Manage Order</p>
        </div>
        <div
          className=" flex z-10 items-center cursor-pointer w-full h-10 p-1 left-[32.5rem] top-64 bg-[#f3f1f1] rounded-l-lg border border-none hover:bg-gray-300"
          onClick={logout}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-l-lg">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              color="#FFFFFF"
              className="w-5"
            />
          </div>
          <p className="ml-2 font-bold text-black">Logout</p>
        </div>
      </nav>
    </div>
  )
}

export default SideBar
