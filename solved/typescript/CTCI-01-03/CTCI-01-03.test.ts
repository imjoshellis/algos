import { makeUrl } from './CTCI-01-03'

describe('makeUrl', () => {
  it('runs', () => {
    makeUrl('a b')
  })

  it('replaces spaces with %20', () => {
    const input = 'a  b '
    const output = 'a%20%20b%20'
    expect(makeUrl(input)).toEqual(output)
  })
})
