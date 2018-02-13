import axios from 'axios';
export function postLogin(email,pwd){
  return (dispatch)=>{
    return axios.post(`https://itunes-search-iypahdbpmn.now.sh/api/accounts/login`, {email:email, password: pwd }).then((response)=> {
      if(response.data.success){
        sessionStorage.setItem('token', response.data.token);
        dispatch(login(true));
      } else dispatch(login(false));

    })
  }
}

export function postSignup(email,pwd){  console.log('signup', email, password);
  return (dispatch)=>{
    return axios.post(`https://itunes-search-iypahdbpmn.now.sh/api/accounts/signup`, {email:email, password: pwd }).then((response)=> {
      if(response.data.success){
        sessionStorage.setItem('token', response.data.token);
      }
      dispatch(login(response.data));
    })
  }
}

export function login(res){
  return {
    type: 'login_success',
    payload: res
  }
}
