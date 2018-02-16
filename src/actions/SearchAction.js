import axios from 'axios';
export function getAlbumList(searchTerm){
  return (dispatch)=>{
    dispatch(loadingStatus(true));
    return axios.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${searchTerm}`).then((response)=> {
      dispatch(albumList(response.data));
      dispatch(loadingStatus(false));
    }).catch(function (error) {
    console.log(error);
  })
  }
}

export function albumList(res){
  return {
    type: 'get_albums',
    payload: res
  }
}

export function loadingStatus(payload){
  return {
    type: 'set_loading',
    payload: payload
  }
}
