// require('babel-register')
// var chicken = require ('../app/joke.js').chicken
// var expect = require('chai').expect
import {chicken} from '../app/joke.js'
import {expect} from 'chai'
describe('Chicken', function(){
  it('Should have something about a road', function(){
    var containsRoad = chicken().indexOf('road') >= 0
    expect(containsRoad).to.equal(true)
  })
})
