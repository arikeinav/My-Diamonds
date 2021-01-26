const initialState = {
  users: [],
  loggedInUser: null,
};

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, loggedInUser: action.user };
    case "SET_USERS":
      return {
        ...state,
        users: [...action.users],
      };
    case "UPDATE_USERS":
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action._id ? action.user : user
        ),
      };

    default:
      return state;
  }
}
