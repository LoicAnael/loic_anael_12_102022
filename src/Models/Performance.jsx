export default class Performance {
  userId
  kind
  data
  stat

  constructor(data) {
    this.userId = data.userId
    this.kind = data.kind
    this.data = data.data
    this.stat = data.stat
  }
}
