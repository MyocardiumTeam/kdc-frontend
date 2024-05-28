import { useRouter } from 'next/router';
import s from './login.module.scss';
import { useForm } from 'react-hook-form';
import { defaultValues, SignInType, validationSchema } from './common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthUserMutation } from '../../../store/rtkAuth';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [userAuth, { isSuccess }] = useAuthUserMutation();

  const { push } = useRouter();

  useEffect(() => {
    if (isSuccess) {
      push('/patients');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <input {...register('snils')} className={s.Form__Input} placeholder="111-111-111-11" />
        <p className={s.Form__TitleInput}>Пароль</p>
        <div className={s.Form__PasswordView}>
          <input
            {...register('userPassword')}
            className={s.Form__InputPass}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="*********"
          />
          <button type="button" onClick={handlePasswordVisibility}>
            <Image
              className={s.Form__SecurityImage}
              src={isPasswordVisible ? '/images/Security.png' : '/images/SecurityClosed.png'}
              alt={isPasswordVisible ? 'Security' : 'Security Closed'}
              width={700}
              height={700}
              fetchPriority="high"
              priority
            />
          </button>
        </div>
        <button className={s.Form__Button}>Вход</button>
      </form>
    </main>
  );
};
export default Login;
