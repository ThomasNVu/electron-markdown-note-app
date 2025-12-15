import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cd = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}
