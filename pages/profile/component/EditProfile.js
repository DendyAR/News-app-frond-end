import { useState, useEffect } from "react";
import useSWR from "swr";
import Fetcher from "../../../lib/fetcher";
import { verifyUser } from "../../../lib/fetchUsers";
import { useUser } from "../../api/users";

const EditProfile = () => {
	const data = useSWR("api/verify", verifyUser);
	const id = data?.data?.id;
	const token_user = data?.data?.token;
  const [background, setBackground] = useState([]);
  const [photo, setPhoto] = useState([]);
	const { user, mutateUser, errUser } = useUser(id);
	const [dataUser, setDataUser] = useState({
    username : null,
    name : null,
    email : null,
    password : null,
    job : null,
    about : null
  })

	useEffect(()=>{
    const formData = new FormData()
    if(photo.name != undefined){
      formData.append(`photo`, photo)
      try{
        const response = Fetcher({
          method:'PATCH',
          url:`${process.env.API_URL}/users/update-user/${id}`,
          headers:{'user-token' : token_user},
          data:formData
        })
        if(response.status == 200){

        }else{

        }
      }catch(error){
        console.log(error)
      }
    }
  }, [photo])

  useEffect(() => {
    const formData = new FormData()
    if(background.name != undefined){
      formData.append(`image`, background)
        try{
          const response = Fetcher({
            method:'PATCH',
            url:`${process.env.API_URL}/users/${id}`,
            headers:{'user-token' : token_user},
            data:formData
          })
          if(response.status == 200){
            console.log(response)
          }else{
            console.log(response)
          }
        }catch(err){
          console.log(err)
        }
    }
  }, [background])

	const processUpdate = (e) =>{
    e.preventDefault();
    try{
      const response = Fetcher({
        method:'PATCH',
        url:`${process.env.API_URL}/users/update-user/${id}`,
        headers:{'user-token' : token_user},
        data:dataUser
      });
      if(response.status == 200){
        console.log(response)
        mutateUser(user)
      }else{
        console.log(response)
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div className="position-relative z1 h-auto">
        <div className="background">
          <img
            src={
              user?.data?.bg_profile != null
                ? `${process.env.API_URL_IMG}${user?.data?.bg_profile}`
                : "./images/article.png"
            }
            className="w-100"
          />
        </div>
        <label className="text-center position-absolute top-50 start-50 translate-middle z2 bg-primary rounded-circle">
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setBackground(e.target.files[0])}
          />
          <img src="./icon/Pen.svg" className="m-2" />
        </label>
        <label className="text-center position-absolute top-100 start-50 translate-middle z2">
          <div className="btn-blue-light rounded-circle">
            <img
              src={`${
                user?.data?.photo_profile
                  ? `${process.env.API_URL_IMG}${user?.data?.photo_profile}`
                  : "./images/no-photo.png"
              }`}
              className="photo_profile rounded-circle m-2"
            />
            <div className="text-center position-absolute top-50 start-100 translate-middle z3 bg-primary rounded-circle">
              <img src="./icon/Pen.svg" className="m-2" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
          </div>
        </label>
      </div>
      <div className="container-fluid w-100 mx-0 mt-5 py-5">
        <form onSubmit={(e) => processUpdate(e)}>
          <div className="row mt-3 mb-2 px-3">
            <div className="col-12 col-md-6">
              <label className="ms-1">Username :</label>
              <input
                type="text"
                className="form-control border-radius p-3"
                placeholder="your username"
                aria-label="username"
                defaultValue={user?.data?.username}
                onChange={(e) =>
                  setDataUser({ ...dataUser, username: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="ms-1">Name :</label>
              <input
                type="text"
                className="form-control border-radius p-3"
                placeholder="your name"
                aria-label="name"
                defaultValue={user?.data?.name}
                onChange={(e) =>
                  setDataUser({ ...dataUser, name: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="ms-1">Email :</label>
              <input
                type="email"
                className="form-control border-radius p-3"
                placeholder="your email"
                aria-label="email"
                defaultValue={user?.data?.email}
                onChange={(e) =>
                  setDataUser({ ...dataUser, email: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="ms-1">Password :</label>
              <input
                type="password"
                className="form-control border-radius p-3"
                placeholder="your password"
                aria-label="password"
                onChange={(e) =>
                  setDataUser({ ...dataUser, password: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="ms-1">Job :</label>
              <input
                type="text"
                className="form-control border-radius p-3"
                placeholder="your job"
                aria-label="job"
                defaultValue={user?.data?.job}
                onChange={(e) =>
                  setDataUser({ ...dataUser, job: e.target.value })
                }
              />
              <div className="mt-md-5 mt-0">
                <label for="floatingTextarea2 ms-1">About :</label>
                <textarea
                  className="form-control border-radius p-3"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  defaultValue={user?.data?.about}
                  onChange={(e) =>
                    setDataUser({ ...dataUser, about: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-grid gap-2 pt-4">
                <button
                  className="btn btn-blue btn-lg border-radius p-3 mb-3 shadow-sm"
                  type="button"
                >
                  Request to be an author
                </button>
                <button
                  className="btn btn-dark btn-lg border-radius p-3 mb-3 shadow-sm"
                  type="submit"
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile
