const initialState = {
  data: [],
  loading: false,
};

export const UserLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };
    case "USER_LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.payload,
        data: [],
      };
    case "USER_LOGOUT":
      return {
        ...state,
        data: [],
        loading: false,
        isLogin: false,
      };
    default:
      return state;
  }
};
