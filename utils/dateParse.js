import dayjs from 'dayjs'

export function dateParse(date) {
    return dayjs(date).format('DD.MM.YYYY hh:mm:ss A')
}