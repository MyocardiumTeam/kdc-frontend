import { z } from 'zod';

import { validateSnilsSchema, validatePasswordSchema } from '@constants/schemes';

export const validationSchema = z.object({
  snils: validateSnilsSchema,
  userPassword: validatePasswordSchema,
});

export type SignInType = z.infer<typeof validationSchema>;

export const defaultValues: SignInType = {
  snils: '',
  userPassword: '',
};
