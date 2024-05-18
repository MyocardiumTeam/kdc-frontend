import { useRouter } from 'next/router';
import s from './login.module.scss';
import { useForm } from 'react-hook-form';
import { defaultValues, SignInType, validationSchema } from './common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthUserMutation } from '../../../store/rtkAuth';
import { useEffect } from 'react';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignInType>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const [userAuth, { isSuccess }] = useAuthUserMutation();

  const { push } = useRouter();

  useEffect(() => {
    if (isSuccess) {
      push('/patients');
    }
  }, [isSuccess]);

  const handleSignIn = async (data: SignInType) => {
    try {
      const response = await userAuth(data);
    } catch (e: any) {
      console.error('LOGIN_ERROR: ', e);
    }
  };

  return (
    <main className={s.Login}>
      <h1 className={s.Login__Title}>
        Панель
        <br /> администратора
      </h1>

      <form onSubmit={handleSubmit(handleSignIn)} className={s.Form}>
        <p className={s.Form__TitleInput}>Снилс</p>
        <input {...register('snils')} className={s.Form__Input} />
        <p className={s.Form__TitleInput}>Пароль</p>
        <input {...register('userPassword')} className={s.Form__Input} />
        <button className={s.Form__Button}>Вход</button>
      </form>
    </main>
  );
};
export default Login;
