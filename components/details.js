const ProfileDetails = ({ user }) => (
  <div className="max-w-md mx-auto">
    <div className="flex-1">
      <div className="mt-10 shadow-md">
        <div className="flex items-center h-10 border bg-[#79bde4] border-[#79bde4]">
          <h1 className="px-5 font-bold text-white">Profile Details</h1>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap justify-between mt-5">
            <div className="h-12 relative rounded-md w-full py-[0.188rem] px-3 mb-2 bg-[#cee1ff88] border-none">
              <p className="text-xs font-bold mt-1 text-[#A6ADB4]">
                First Name
              </p>
              <p className="leading-tight text-gray-800">
                {user && user.firstname}
              </p>
            </div>
            <div className="h-12 relative rounded-md w-full py-[0.188rem] px-3 mb-2 bg-[#cee1ff88] border-none">
              <p className="text-xs font-bold mt-1 text-[#A6ADB4]">Last Name</p>
              <p className="leading-tight text-gray-800">
                {user && user.lastname}
              </p>
            </div>
            <div className="h-12 relative rounded-md w-full py-[0.188rem] px-3 mb-2 bg-[#cee1ff88] border-none">
              <p className="text-xs font-bold mt-1 text-[#A6ADB4]">Email</p>
              <p className="leading-tight text-gray-800">
                {user && user.email}
              </p>
            </div>
            <div className="h-12 relative rounded-md w-full py-[0.188rem] px-3 mb-2 bg-[#cee1ff88] border-none">
              <p className="text-xs font-bold mt-1 text-[#A6ADB4]">Password</p>
              <p className="leading-tight text-gray-800">{'*********'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProfileDetails
