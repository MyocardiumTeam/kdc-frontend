import { z } from 'zod';

export const FULL_NAME_REGEXP = /^[a-zA-Z]+\s[A-Za-z]*$/g;
export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const PASSWORD_CYRILIC_REGEXP = /[\u0400-\u04FF]/gi;

export const validateSnilsSchema = z
  .string()
  .min(10, { message: 'Required field' })
  .max(11, { message: 'Max length' });

export const validateNameSchema = z
  .string()
  .regex(FULL_NAME_REGEXP, 'No more than two words')
  .min(1, { message: 'Required field' })
  .max(100, { message: 'Max length' });

export const validatePasswordSchema = z
  .string()
  //   .regex(PASSWORD_REGEXP, {
  //     message: '',
  //   })
  .min(1, { message: '' })
  .max(60, { message: '' });
