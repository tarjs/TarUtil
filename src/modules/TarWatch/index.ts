export default (fn: <T>(value?: T) => void, watchStr: string[], data: any) => {
  watchStr.forEach(key => {
    let value = data[key]
    Object.defineProperty(data, key, {
      get() {
        return value
      },
      set(newValue) {
        value = newValue
        fn(newValue)
      }
    })
  })
}