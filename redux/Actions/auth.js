import axios from "axios";

const UserLoginSuccess = (data) => {
  return { type: "USER_LOGIN_SUCCESS", payload: data };
};
const UserLoginError = (err) => {
  return { type: "USER_LOGIN_ERROR", payload: err };
};
const UserLogout = () => {
  return { type: "USER_LOGOUT" };
};

export const UserLogin = (formData, cb) => {
  return (dispatch) => {
    cb(true);
    return axios({
      method: "POST",
      url: `${process.env.API_URL}/auth/login`,
      data: formData,
    })
      .then((res) => {
        dispatch(UserLoginSuccess(res.data));
        cb(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        dispatch(UserLoginError(err));
        cb(false);
      });
  };
};
