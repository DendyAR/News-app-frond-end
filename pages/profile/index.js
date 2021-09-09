import useSWR from "swr";
import { Navbar, Header, Footer } from "../../components";
import { userLogout, verifyUser } from "../../lib/fetchUsers";
import { useUser } from "../api/users";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Fetcher from "../../lib/fetcher";
import  EditProfile  from "./component/EditProfile"
import  Faq  from "./component/faq"
import  Help  from "./component/help"
import  SavedPost  from "./component/savedPost"

const Profile = () => {
  const router = useRouter();
  const [menu, setMenu] = useState('profile')
  const data = useSWR("api/verify", verifyUser);
  const id = data?.data?.id;
  const { user, mutateUser, errUser } = useUser(id);

  useEffect(async()=>{
    let promise = new Promise((resolve, reject)=>{
      setTimeout(() => resolve(data),100)
    })
    let result = await promise
    if(!result?.data){
      router.replace('/login')
    }
  },[data])

  const reset = () =>{
    document.getElementById('editProfile').classList.remove("btn-blue-light");
    document.getElementById('saved').classList.remove("btn-blue-light");
    document.getElementById('faq').classList.remove("btn-blue-light");
    document.getElementById('help').classList.remove("btn-blue-light");
  }
  useEffect(()=>{
    switch(menu){
      case 'profile':
        reset();
        document.getElementById('editProfile').classList.add("btn-blue-light");
        break;
      case 'saved':
        reset();
        document.getElementById('saved').classList.add("btn-blue-light");
        break;
      case 'faq':
        reset();
        document.getElementById('faq').classList.add("btn-blue-light");
        break;
      case 'help':
        reset();
        document.getElementById('help').classList.add("btn-blue-light");
        break;
      default:
        reset();
        document.getElementsById('editProfile').classList.add("btn-blue-light")
        setMenu('profile')
        break
    }
  },[menu])
console.log(menu)
  return (
    <>
      <Header title="Profile" />
      <Navbar state="profile" />
      <body>
        <main className="container-fluid">
          <div className="row mt-5">
            <section className="col-12 col-md-4 card  p-0">
              <div class="px-0 px-md-5 py-5">
                <h5>Profile</h5>
                <div className="card border-radius shadow-lg mt-5">
                  <div className="row mw-100">
                    <div className="col-12 col-md-5 text-center">
                      <img
                        src={`${
                          user?.data?.photo_profile
                            ? `${process.env.API_URL_IMG}${user?.data?.photo_profile}`
                            : "./images/no-photo.png"
                        }`}
                        className="img-fluid img-thumbnail rounded mx-3 mt-1"
                      />
                    </div>
                    <div className="col-12 col-md-7">
                      <ul className="list-group p-1">
                        <li className="list-group-item  border-0 text-blue">{`${
                          user?.data?.username != null
                            ? user?.data?.username
                            : "Your username ? "
                        }`}</li>
                        <li className="list-group-item  border-0 fw-bolder text-capitalize">{`${
                          user?.data?.name != null
                            ? user?.data?.name
                            : "Your name ? "
                        }`}</li>
                        <li className="list-group-item fw-bolder  border-0 text-primary text-capitalize">{`${user?.data?.role == 'basic' ? 'Member' : user?.data?.role}`}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-3 px-4">
                    <p className="fw-bold">About me</p>
                    <span className="text-justify">
                      {`${
                        user?.data?.about != null
                          ? user?.data?.about
                          : "Your about ? "
                      }`}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-primary text-center my-3">See profile</span>
              <ul class="list-group border-0 bg-transparent mb-5">
                <li class="list-group-item border-0 cursor-pointer px-1 px-md-5" id='editProfile' onClick={()=>{setMenu('profile')}}>
                  Edit Profile
                </li>
                <li class="list-group-item border-0 cursor-pointer px-1 px-md-5" id='saved' onClick={()=>{setMenu('saved')}}>
                  Saved Post
                </li>
                <li class="list-group-item border-0 cursor-pointer px-1 px-md-5" id='faq' onClick={()=>{setMenu('faq')}}>
                  FAQ
                </li>
                <li class="list-group-item border-0 cursor-pointer px-1 px-md-5" id='help' onClick={()=>{setMenu('help')}}>
                  Help
                </li>
                <li
                  class="list-group-item border-0 cursor-pointer px-1 px-md-5"
                  onClick={() => userLogout(router)}
                >
                  Logout
                </li>
              </ul>
            </section>
            <section className="col-12 col-md-8 pt-3 px-0">
             {menu == 'profile'?
              <EditProfile/>
             :(menu == 'saved')?
              <SavedPost />
             :(menu == 'help')?
              <Help/>
             :(menu == 'faq')?
              <Faq/>
             :<EditProfile/>}
            </section>
          </div>
        </main>
      </body>
      <Footer />
    </>
  );
};

export default Profile;
