const getTimeStamp = (timezone: number) => {
  let date = new Date()
  if (timezone !== undefined) {
    const d = timezone * 60 + date.getTimezoneOffset()
    date = new Date(date.getTime() + d * 60 * 1000)
  }
  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]
    .map((n, i) => {
      let s = ''
      if (n < 10) {
        s += '0'
      }
      s += n
      if (i < 2) {
        s += '/'
      } else if (i === 2) {
        s += ' '
      } else if (i < 5) {
        s += ':'
      }
      return s
    })
    .join('')
}

export default getTimeStamp
