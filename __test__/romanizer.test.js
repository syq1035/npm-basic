import {transform} from "../src/romanizer"

describe('romanizer', () => {
  it('should return x', () =>{
    let result = transform(10)
    
    expect(result).toEqual('X')
  })
})