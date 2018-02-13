import axios from 'axios';
export function getAlbumList(searchTerm){
  return (dispatch)=>{
    return axios.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${searchTerm}`).then((response)=> {
      dispatch(albumList(response.data));
    })
  }
}

export function albumList(res){
  return {
    type: 'get_albums',
    payload: res
  }
}
