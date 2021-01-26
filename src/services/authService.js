import storageService from "./asyncStorageService";

export const userService = {
  login,
  logout,
  signup,
  getById,
  //   update,
};

function getById(userId) {
  return storageService.get("user", userId);
}

// function update(user) {
//   return storageService.put('user', user)
//   // return httpService.put(`user/${user._id}`, user);
// }

async function login(userCred) {
  console.log('login');
  const users = await storageService.query("user");
  console.log(users);
  const user = users.find((user) => user.username === userCred.username);
  if (!user) return;
  else return _handleLogin(user);
}

async function signup(userCred) {
  userCred.isAdmin = false
  userCred.isBlocked = false
  const user = await storageService.post("user", userCred);
  return _handleLogin(user);
}

function logout() {
  sessionStorage.clear();
}

function _handleLogin(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
}

function makeId(length = 5) {
  var txt = "";
  var possible = "0123456789abcdefgABCDEFG";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
