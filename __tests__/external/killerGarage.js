const { door } = require('../../external/killerGarage.js')

describe('testing operation of killer garage door', () => {
  let operation = '', output = '';

  it('door action should be able to open completely and stay open', () => {
    operation = 'P..............'
    output = '123455555555555'
    expect(output).toEqual(door(operation))
  })
  it('door action should be able to open completely, stay open, then close', () => {
    operation = 'P......P.......'
    output    = '123455543210000'
    expect(output).toEqual(door(operation))
  })
  it('door action should be able to start opening and be paused', () => {
    operation = 'P..P....'
    output    = '12333333'
    expect(output).toEqual(door(operation))
  })
  it('door action should be able to resume opening after being paused', () => {
    operation = 'P..P..P.....'
    output    = '123333455555'
    expect(output).toEqual(door(operation))
  })
  it('door action should be able to reverse on obstacles while closing', () => {
    operation = 'P.....P.O...'
    output    = '123455434555'
    expect(output).toEqual(door(operation))
  })
  it('door action should be able to reverse while opening and allow a pause', () => {
    operation = 'P..OP..P..'
    output    = '1232222100'
    expect(output).toEqual(door(operation))
  })
})