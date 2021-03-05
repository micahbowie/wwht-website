export default function jokeReducer(state = {joke: []}, action) {
  switch (action.type) {
    case 'FETCH_JOKE':
      return {joke: action.payload }
    default:
      return state
  }
}
