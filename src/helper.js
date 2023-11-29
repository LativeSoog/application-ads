const monthNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const formatDateSells = (currentDate) => {
  const date = new Date(currentDate)
  const monthIndex = date.getMonth()
  const dateYear = date.getFullYear()
  const formattedDate = monthNames[monthIndex - 1] + ` ${dateYear}`

  return formattedDate
}

export const formatDateAndTime = (dateTime) => {
  const nowDate = new Date()
  const date = new Date(dateTime)

  const isTodayDate =
    date.getDate() === nowDate.getDate() &&
    date.getMonth() &&
    date.getFullYear() === nowDate.getFullYear()

  const isYesterdayDate =
    date.getDate() === nowDate.getDate() - 1 &&
    date.getMonth() === nowDate.getMonth() &&
    date.getFullYear() === nowDate.getFullYear()

  const options = { hour: 'numeric', minute: 'numeric' }
  const timeString = date.toLocaleTimeString('ru-RU', options)

  if (isTodayDate) {
    return `Сегодня, в ${timeString}`
  } else if (isYesterdayDate) {
    return `Вчера, в ${timeString}`
  } else {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
    const dateString = date.toLocaleDateString('ru-RU', options)
    return `${dateString} в ${timeString}`
  }
}

export const host = 'http://127.0.0.1:8090/'
