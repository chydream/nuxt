import Cookie from 'js-cookie'
import {getCookiesObj} from '~/util/tool'
export const setToken = (token) => {
  if(process.SERVER_BUILD) return
  // window.localStorage.setItem('token', token)
  setLocal('token', token, 1000*60*60*6)
  Cookie.set('token', token)
}
export const getToken = (params,req) => {
  if(process.SERVER_BUILD) return
  let token
  if(params == 'local'){
    // token = window.localStorage.getItem('token') 
    token = getLocal('token')
  }else{
    // console.log(req.headers.cookie)
    if (req.headers.cookie) {
      const cookieOjb = getCookiesObj(req.headers.cookie)
      token = cookieOjb.token
    } else {
      token = ''
    }
  }
  return token
}
export const unsetToken = () => {
  if(process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
  Cookie.remove('token')
}

//给localstorage设置过期时间
function setLocal(key,value,exp){
  var cur = new Date().getTime();
  localStorage.setItem(key,value);
  localStorage.setItem("timeSet",JSON.stringify({curTime:cur,expTime:exp}));
}
function getLocal (key) {
  var itemValue = localStorage.getItem(key);
  var timeSet = localStorage.getItem("timeSet");
  if (itemValue != undefined) {
    var dataObj = JSON.parse(timeSet);
    if (new Date().getTime() - dataObj.curTime > dataObj.expTime) {
      console.log('信息已过期');
      localStorage.removeItem(key);
      return undefined;
    } else {
      return itemValue;
    }
  } else {
    return undefined;
  }
}