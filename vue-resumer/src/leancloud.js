import AV from 'leancloud-storage'

var APP_ID = 'ifnN3aWKODrvdMQvpySXRv15-gzGzoHsz';
var APP_KEY = 'ma3lCaNKuq49qucoDUOehgoX';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var Users = AV.Object.extend('Users');
export default users = new Users();

console.log(1111)
console.log(users,111)
