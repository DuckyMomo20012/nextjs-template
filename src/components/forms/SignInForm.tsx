'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Group,
  PasswordInput,
  Space,
  Stack,
  TextInput,
} from '@mantine/core';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type TSignInForm = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get('from');

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (formData: TSignInForm) => {
    const res = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res?.status === 401) {
      setError('email', {
        type: 'manual',
        message: 'Invalid credentials',
      });

      setError('password', {
        type: 'manual',
        message: 'Invalid credentials',
      });
    } else if (res?.status === 200) {
      router.push(from || '/');
    }
  };

  return (
    <form className="h-full w-full" onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          error={errors.email?.message}
          label="Email"
          withAsterisk
          {...register('email')}
        />
        <PasswordInput
          error={errors.password?.message}
          label="Password"
          withAsterisk
          {...register('password')}
        />

        <Space h="md" />

        <Group className="w-full" justify="center">
          <Button type="submit">Sign in</Button>
        </Group>
      </Stack>
    </form>
  );
};

export { SignInForm };
