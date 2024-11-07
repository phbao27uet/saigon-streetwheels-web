import { z } from 'zod'
import { ERROR_MESSAGE } from './messages'

export const numberSchema = z
  .number({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .refine((val) => {
    return Number.isInteger(val)
  }, ERROR_MESSAGE.integerNumber)
  .refine((val) => {
    return val.toString().length <= 7
  }, ERROR_MESSAGE.maxNumberInput)

export const decimalNumberSchema = z
  .number({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .refine((val) => {
    const [integer] = val.toString().split('.')

    return !Number.isNaN(val) && integer.toString().length <= 7
  }, ERROR_MESSAGE.maxNumberInput)

export const positiveNumberSchema = numberSchema.refine((val) => {
  return val > 0
}, ERROR_MESSAGE.positiveNumber)

export const positiveDecimalNumberSchema = decimalNumberSchema.refine((val) => {
  return val > 0
}, ERROR_MESSAGE.positiveNumber)
