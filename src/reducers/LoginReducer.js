export default(state={'authenticated': false,'user':'Guest'}, action) => {
  switch(action.type) {
    case 'login_success':
    return Object.assign({}, state, {
        'authenticated': action.payload.login,
        'username':  action.payload.user
      })
    default :
      return state;
  }
}
