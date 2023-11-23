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

export const formatDate = (currentDate) => {
  const date = new Date(currentDate)
  const monthIndex = date.getMonth()
  const dateYear = date.getFullYear()
  const formattedDate = monthNames[monthIndex - 1] + ` ${dateYear}`

  return formattedDate
}

export const host = 'http://127.0.0.1:8090/'
