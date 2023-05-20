export default class {
  fn!: () => void
  time!: number
  timer!: any
  constructor(fn: () => void, time: number) {
    this.time = time
    this.fn = fn
  }
  startTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
    this.timer = setTimeout(() => {
      this.fn()
      this.startTimer()
    }, this.time)
  }
  stopTimer() {
    window.clearTimeout(this.timer)
    this.timer = null
  }
}