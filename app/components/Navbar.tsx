'use client';

import { Box, Flex, Title, Text } from '@mantine/core';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box px="md" py="xs" >
      <header>
        <Flex justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Title order={2} c="black">
              Founders<span style={{ color: 'blue' }}>List</span>
            </Title>
          </Link>

          <Flex justify="center" align="center" gap="md">
            {session?.user ? (
              <>
                <Link href="/startup/create">
                  <Text c="black">Create</Text>
                </Link>
                <Link href={`/user/${session.user.id}`}>
                  <Text c="black">{session.user.name}</Text>
                </Link>
                <button style={{color:'black', background:'transparent', border:'none'}} onClick={() => signOut({ callbackUrl: '/' })}>
                  <Text c="black">Logout</Text>
                </button>
              </>
            ) : (
              <button style={{color:'black', border:'none'}} onClick={() => signIn('github')}>
                <Text c="white">Login</Text>
              </button>
            )}
          </Flex>
        </Flex>
      </header>
    </Box>
  );
};

export default Navbar;