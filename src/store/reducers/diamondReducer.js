const initialState = {
    diamonds: [],
    
  };
  
  export function diamondReducer(state = initialState, action = {}) {
    switch (action.type) {
    
      case "SET_DIAMONDS":
        return {
          ...state,
          diamonds: [...action.diamonds],
        };
      
  
      default:
        return state;
    }
  }