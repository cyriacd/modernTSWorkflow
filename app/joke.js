export function chicken() {
  var obj1 = {a:5}
  var obj2 = {...obj1}
  return "Why did the chicken cross the road?"
}
/*
transpiles to
module.exports = {
  chicken : function() {
    return "Why did the chicken cross the road"
  }
}
*/
