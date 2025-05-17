    'use client';
    import { Box, Flex, Title, Text } from '@mantine/core';
    import { useSession, signIn, signOut } from 'next-auth/react';
    import Link from 'next/link';

    const Navbar = () => {
      const { data: session } = useSession();

      return (
        <Box px={5} py={3} bg={"blue"}>
          <header>
            <Flex justify="space-between" align="center" >
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Title order={1} c="black">
                  Founders<span style={{ color: 'blue' }}>List</span>
                </Title>
              </Link>

              <Flex justify="center" align="center" gap="5">
                {session?.user ? (
                  <>
                    <Link href="/startup/create">
                      <Text>Create</Text>
                    </Link>
                    <button onClick={() => signOut({ callbackUrl: '/' })}>
                      <Text>Logout</Text>
                    </button>
                    <Link href={`/user/${session.user.id}`}>
                      <Text>{session.user.name}</Text>
                    </Link>
                  </>
                ) : (
                  <button onClick={() => signIn('github')}>
                    <Text>Login</Text>
                  </button>
                )}
              </Flex>
            </Flex>
          </header>
        </Box>
      );
    };

    export default Navbar;