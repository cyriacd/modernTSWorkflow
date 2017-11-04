var chicken = require ('../app/joke.js').chicken
var expect = require('chai').expect
describe('Chicken', function(){
  it('Should have something about a road', function(){
    var containsRoad = chicken().indexOf('road') >= 0
    expect(containsRoad).to.equal(true)
  })
})
