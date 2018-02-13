import axios from 'axios';
export function getUpvotesList(){
  return (dispatch)=>{
    return axios.get('https://itunes-search-iypahdbpmn.now.sh/api/upvote').then((response)=> {
      dispatch(upvotesList(response.data));
    })
  }
}

export function addUpvote(cardDetails){
  return (dispatch)=>{
    return axios.post('https://itunes-search-iypahdbpmn.now.sh/api/upvote',cardDetails,{headers: {authorization: sessionStorage.getItem('token')}}).then((response)=> {
      // dispatch(upvotesList(response.data));
    })
  }
}

export function upvotesList(res){
  return {
    type: 'get_upvotes',
    payload: res
  }
}
