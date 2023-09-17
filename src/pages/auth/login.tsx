import { Icon } from '@iconify/react';
import {
  Button,
  Group,
  LoadingOverlay,
  Modal,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Code } from '@/components/ui/code';

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  useEffect(() => {
    if (formSubmitted) {
      setModalVisible(true);
      setOverlayVisible(false);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  const onSubmit = async (form) => {
    const { email, password } = form;
    setOverlayVisible(true);
    // Sign in using next-auth function api
    const { error: signInError } = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (signInError) {
      setError(signInError);
    }
    setFormSubmitted(true);
  };

  return (
    <div className="mx-auto my-4 max-w-sm">
      <h1 className="text-center">Welcome back!</h1>
      <p className="text-center text-sm">
        Do not have an account yet?{' '}
        <Link className="font-medium underline" href="/auth/register">
          Create account
        </Link>
      </p>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        <Code variant="outline">username:</Code> tienvinh@gmail.com,{' '}
        <Code variant="solid">password:</Code> 1234
        <Code variant="soft">password:</Code> 1234
        <Code variant="ghost">password:</Code> 1234
      </p>

      <Paper
        className="relative"
        mt={30}
        p={30}
        radius="md"
        shadow="md"
        withBorder
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...register('email')}
            id="email"
          />
          <PasswordInput
            label="Password"
            mt="md"
            placeholder="Your password"
            required
            {...register('password')}
            id="password"
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>

        <LoadingOverlay visible={overlayVisible} />
      </Paper>

      <Modal
        onClose={() => {
          setModalVisible(false);
          if (!error && user) {
            router.push('/');
          }
        }}
        opened={modalVisible}
        withCloseButton={false}
      >
        {error ? (
          <Group>
            <ThemeIcon color="red" radius="xl" size="xl" variant="light">
              <Icon icon="ic:baseline-error-outline" width="24" />
            </ThemeIcon>
            <Text>Wrong credentials</Text>
          </Group>
        ) : (
          user && (
            <Group>
              <ThemeIcon color="green" radius="xl" size="xl" variant="light">
                <Icon icon="ic:twotone-check-circle" width={24} />
              </ThemeIcon>
              <Text>You are logged in</Text>
            </Group>
          )
        )}
      </Modal>
    </div>
  );
};

export default Login;
