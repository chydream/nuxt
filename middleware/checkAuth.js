import {getToken, unsetToken} from '~/util/auth'
export default function({isServer, store, req, redirect}){
  let token 
  if(req){
    // console.log(req.headers.cookie)
    token = getToken('cookie', req) 
    // console.log(token, 123)
  }else{
    token = getToken('local') 
    // console.log(token, 456)
  }
  store.commit('login/SET_TOKEN', token)
  if(token){
    store.commit('login/SET_AUTH', true)
  }else{
    store.commit('login/SET_AUTH', false)
    // return redirect('/')
  }
}