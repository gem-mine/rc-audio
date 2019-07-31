function timeUnitFormat (time) {
  return time.toString().padStart(2, '0')
}

export function secondsToTime (secs) {
  secs = Math.floor(secs)
  const hours = Math.floor(secs / (60 * 60))

  const divisorForMinutes = secs % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)

  const divisorForSeconds = divisorForMinutes % 60
  const seconds = Math.floor(divisorForSeconds)
  let time = ''

  if (hours > 0) {
    time += `${hours}:`
  }

  time += `${timeUnitFormat(minutes)}:`
  time += timeUnitFormat(seconds)
  return time
}

export function decimalToPercent (decimal) {
  return `${decimal * 100}%`
}

export function isIe9 () {
  return !window.atob
}

export function isIe () {
  return window.ActiveXObject || 'ActiveXObject' in window
}
