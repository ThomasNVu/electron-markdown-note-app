import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const locale = window.context?.locale ?? navigator.language

const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}
