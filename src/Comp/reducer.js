export const initialState = {
    user: null,
    pic: null,
    users : null
};
const reducer = (state, action) => {
    switch (action.type) {
      case "SET__USER":
        return {
          ...state,
          user: action.user
        }
      case "SET__USERS":
        return {
          ...state,
          users : action.users
        }
      case "USER__LOGOUT":
        return {
            ...state,
            user: null
        }
      case "SET__PIC":
        return{
          ...state,
          pic: action.pic
        }
      default:
        return state;
    }
  };
  
  export default reducer;