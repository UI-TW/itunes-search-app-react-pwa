export default(state={'authenticated': false}, action) => {
  switch(action.type) {
    case 'login_success':
    return Object.assign({}, state, {
        'authenticated': action.payload
      })
    default :
      return state;
  }
}
