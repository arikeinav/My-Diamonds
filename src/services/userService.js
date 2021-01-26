import httpService from "./httpService";
import storageService from './asyncStorageService'

export const userService ={
  login,
  logout,
  signup,
  getById,
  update,
  getLogedInUser,
  query
};

function query(filterBy) {
  return httpService.get(`user`);
}

async function login(userCred) {
  const user = await httpService.post('auth/login', userCred)
  _handleLogin(user)
  return user
}
async function signup(userCred) {
  const user = await httpService.post('auth/signup', userCred)
  _handleLogin(user)
  return user
    
}
async function logout() {
  sessionStorage.clear()
  await httpService.post('auth/logout');
}
function _handleLogin(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
  
}
function getById(userId) {
  return httpService.get(`user/${userId}`);
}

function update(user) {
  return httpService.put(`user/${user._id}`, user)
}
function getLogedInUser(){
  return JSON.parse(sessionStorage.getItem('user'))
}


