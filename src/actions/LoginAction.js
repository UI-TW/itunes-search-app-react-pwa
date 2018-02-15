import axios from 'axios';
export function postLogin(email,pwd){
  return (dispatch)=>{
    return axios.post(`https://itunes-search-iypahdbpmn.now.sh/api/accounts/login`, {email:email, password: pwd }).then((response)=> {
      if(response.data.success){
        let useremail = response.data.email;
        let username = useremail.slice(0,useremail.indexOf("@"));
        sessionStorage.clear();
        sessionStorage.setItem('login', response.data.success);
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('token', response.data.token);
        dispatch(login({'user': username,'login': true }));
      } else dispatch(login({'user': 'Guest','login': false }));

    })
  }
}

export function postSignup(email,pwd){
  return (dispatch)=>{
    return axios.post(`https://itunes-search-iypahdbpmn.now.sh/api/accounts/signup`, {email:email, password: pwd }).then((response)=> {
      if(response.data.success){
        sessionStorage.setItem('token', response.data.token);
        let useremail = response.data.email;
        let username = useremail.slice(0,useremail.indexOf("@"));
        dispatch(login({'user': username,'login': true }));
      }
    })
  }
}

export function login(response){
  return {
    type: 'login_success',
    payload: response
  }
}
