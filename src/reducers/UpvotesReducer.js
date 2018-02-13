export default(state=[], action) => {
  switch(action.type) {
    case 'get_upvotes':
    return Object.assign({}, state, {
        'upvotelist': action.payload.favorites
      })
    default :
      return state;
  }
}

//return [...state,{albumlist: payload.results}];
