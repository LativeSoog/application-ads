import { format, isToday, isYesterday } from 'date-fns'
import { ru } from 'date-fns/locale'

export const useDateFormatter = () => {
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

  const dateFormatter = (inputDate) => {
    const currentDate = new Date()
    const formattedDate = new Date(inputDate)

    if (isToday(formattedDate)) {
      return `Сегодня в ${format(formattedDate, 'HH:mm')}`
    } else if (isYesterday(formattedDate)) {
      return `Вчера в ${format(formattedDate, 'HH:mm')}`
    } else {
      return format(formattedDate, 'dd.MM.yyyy в HH:mm')
    }
  }

  const dateSellsFormatter = (inputDate) => {
    const formattedDate = new Date(inputDate)
    const monthIndex = formattedDate.getMonth()
    const dateYear = formattedDate.getFullYear()
    return monthNames[monthIndex - 1] + ` ${dateYear}`
  }

  return { dateFormatter, dateSellsFormatter }
}
