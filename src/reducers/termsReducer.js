export default function termsReducer(state = {terms: []}, action) {
  switch (action.type) {
    case 'FETCH_TERMS':
      return {terms: action.payload }
    default:
      return state
  }
}
