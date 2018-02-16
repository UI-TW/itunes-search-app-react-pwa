export const INITIAL_STATE = {
  'loading': false,
  'albumlist':[]
}
export default(state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'get_albums':
    return Object.assign({}, state, {
        'albumlist': action.payload.results
      })
    case 'set_loading':
    return Object.assign({}, state, {
        'loading': action.payload
    })
    default :
      return state;
  }
}

//return [...state,{albumlist: payload.results}];
