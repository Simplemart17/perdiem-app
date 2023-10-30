import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { verifyToken, getAppCookies, logout } from "../../middleware/utils";
import EditProfile from "../../components/editProfile";
import protectedRoute from "../protectedRoute";
import ProfileDetails from "../../components/details";
import Layout from "../../components/layout";

const Profile = ({ profile }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [user, setUser] = useState();

  const { id } = profile;

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`/api/auth/${id}`);
      setUser(data.user);
    };

    fetch();
  }, [editProfile, id]);

  return (
    <Layout
      title="App | Profile Page"
      setEditProfile={setEditProfile}
      editProfile={editProfile}
      logout={logout}
    >
      <div className="relative md:w-[30rem] lg:w-[36rem] sm:mx-auto py-20">
        <div className="relative flex z-10 w-24 h-24 p-1 mt-[-15%] m-auto bg-[#f3f1f1] rounded-2xl top-16 border border-[#3d63ca]">
          <Image
            src="https://res.cloudinary.com/drmrayjr0/image/upload/v1559304041/profile_mbyrmu.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-2xl"
          />
        </div>

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
  );
};

export async function getServerSideProps(context) {
  const { req } = context;

  const { token } = getAppCookies(req);
  // console.log(token, "token", context);
  const profile = token ? verifyToken(token) : "";
  console.log(profile, "this is the profile");

  return {
    props: {
      profile,
    },
  };
}

// export default Profile;
export default protectedRoute(Profile);
