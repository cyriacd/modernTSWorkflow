export function chicken() {
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
