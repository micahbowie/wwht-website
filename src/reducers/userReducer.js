export default function userReducer(state = {users: []}, action) {
  // debugger;
  console.log("Went to reducer first");
  // debugger;
  switch (action.type) {
    case 'FETCH_USERS':
      return {users: action.payload }
      case 'POST_USER':
        return {...state, users: [...state.users, action.payload] }
    default:
      return state
  }
}
