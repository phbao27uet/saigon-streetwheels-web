import { formatDuration, intervalToDuration } from 'date-fns'

export function convertMinutesToDayHourMinute(minutes: number): string {
  const duration = intervalToDuration({
    start: 0,
    end: minutes * 60 * 1000, // Chuyển phút sang milliseconds
  })

  // Định dạng chuỗi kết quả
  return formatDuration(duration, {
    format: ['days', 'hours', 'minutes'], // Chỉ bao gồm ngày, giờ, phút
  })
}
