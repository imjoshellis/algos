import { solve } from './ctci-01-06'

describe('solve', () => {
  it('returns uncompressed if not smaller', () => {
    expect(solve('abc')).toEqual('abc')
    expect(solve('aab')).toEqual('aab')
    expect(solve('aaabc')).toEqual('aaabc')
  })

  it('returns compressed string', () => {
    expect(solve('aaaaaabbc')).toEqual('a6b2c1')
    expect(solve('aaabbcaaa')).toEqual('a3b2c1a3')
  })
})
