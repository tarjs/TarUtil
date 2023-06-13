import { createObserver } from '../index'

test('observer run with data', () => {
  const data = {
    num: 1,
    text: 'test',
  }

  data.num = data.num + 1
  data.text = 'chang text'

  expect(createObserver(data, '#app')).toBeNull()
})
