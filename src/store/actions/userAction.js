import { userService } from "../../services/userService";

export function login(userCreds) {
  return async (dispatch) => {
    try{
    const user = await userService.login(userCreds);
    if(!user) return;
    dispatch({ type: 'SET_USER', user }); 
    window.location.assign('#/diamonds')
    return user
    }
    catch (err){

throw (err.response.data.error)
    }
    }
};
export function loadUsers() {
  return async (dispatch) => {
    try {
      const users = await userService.query();
      dispatch({ type: "SET_USERS", users });
    } catch (err) {
      console.log(`ERROR: while loading users`);
    }
  };
}
export function updateUser(newUser) {
  return async (dispatch) => {
    try {
      const user = await userService.update(newUser);
      dispatch({ type: "UPDATE_USERS", user });
    } catch (err) {
      console.log(`ERROR: while loading users`);
    }
  };
}
export function signup(userCreds) {
  return async dispatch => {
    const user = await userService.signup(userCreds);
    dispatch({ type: 'SET_USER', user });
    window.location.assign('#/diamonds')
  };
}

export function logout() {
  return async dispatch => {
    await userService.logout();
    dispatch({ type: 'SET_USER', user: null });
    window.location.assign('#/')

  };
}

export function setLogedInUser(){
  return async dispatch =>{
    const user = await userService.getLogedInUser();
    dispatch({ type: 'SET_USER', user });
  }
}