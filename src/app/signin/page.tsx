'use client';
import * as Form from '@radix-ui/react-form';
import { Button, Card, Flex, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RiLoginCircleLine } from 'react-icons/ri';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });

    if (!result?.ok) {
      return toast.error('Correo o Contraseña inválido.');
    }
    router.push('/dashboard');
  };

  const errorMessageClassname = 'text-red-500 text-sm opacity-80';
  const inputClassname = 'input input-bordered w-full bg-transparent';

  return (
    <>
      <div className="flex h-screen w-screen  justify-center bg-cyan-700">
        <Flex
          direction="column"
          justify="center"
          align="center"
          className="w-full p-5"
        >
          <Card className="md:h-full sm:w-full md:w-1/2 shadow-2xl">
            <Flex
              direction="column"
              justify="center"
              align="center"
              height="100%"
              gap="8"
            >
              <Flex direction="column" gap="3">
                <Flex direction="column" gap="3">
                  <Text size="8" style={{ fontWeight: 'lighter' }}>
                    Inicia Sesión
                  </Text>
                  <Image
                    src={require('../../../public/assets/images/cropped-logo-simelec-con-slogan.png')}
                    alt="Logo"
                    height={400}
                    width={400}
                  />
                </Flex>
                <Form.Root onSubmit={onSubmit}>
                  <Flex direction="column" gap="4">
                    <Form.Field className="rounded-md" name="email">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Form.Label className="text-zinc-500">Email</Form.Label>
                        <Form.Message
                          className={errorMessageClassname}
                          match="valueMissing"
                        >
                          Ingresa tu email.
                        </Form.Message>
                        <Form.Message
                          className={errorMessageClassname}
                          match="typeMismatch"
                        >
                          Email inválido.
                        </Form.Message>
                      </div>
                      <Form.Control asChild>
                        <input
                          className={inputClassname}
                          type="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </Form.Control>
                    </Form.Field>
                    <Form.Field className="rounded-md" name="email">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Form.Label className="text-zinc-500">
                          Contraseña
                        </Form.Label>
                        <Form.Message
                          className={errorMessageClassname}
                          match="valueMissing"
                        >
                          Ingresa tu contraseña.
                        </Form.Message>
                      </div>
                      <Form.Control asChild>
                        <input
                          className={inputClassname}
                          type="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Control>
                    </Form.Field>
                    <Form.Submit asChild>
                      <Button size="4" className="bg-[var(--accent-9)]">
                        <Flex align="center" gap="2">
                          <RiLoginCircleLine />
                          <Text>Iniciar Sesión</Text>
                        </Flex>
                      </Button>
                    </Form.Submit>
                  </Flex>
                </Form.Root>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </div>
      <Toaster
        toastOptions={{
          style: { backgroundColor: 'tomato', color: '#f6f6f6' },
        }}
      />
    </>
  );
};

export default SignInPage;
