export default {
  myEncode (source) {
    let nstr = [];
    let s;
    let str = source.slice(0).split('');
    while (str.length) {
       s = str.shift();
       nstr.push(String(s.charCodeAt()).split('').reverse().join(''));
    }
    nstr = nstr.reverse().join('X');
    return nstr;
  },
  getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split("; ");
      for(var i = 0; i < arrCookie.length; i++){
          var arr = arrCookie[i].split("=");
          if(cookieName == arr[0]){
              return arr[1];
          }
      }
      return "";
  }
}
