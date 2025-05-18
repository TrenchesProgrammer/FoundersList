import {Box, Text} from '@mantine/core'
import HeroTitle from '../components/HeroTitle';
export default function Home() {
  return (
<Box
  px="lg"
  style={{
    backgroundColor: '#3b82f6', // or use Mantine's theme.colorScheme if dynamic
    backgroundImage: `repeating-linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2) 1px,
      transparent 1px,
      transparent 20px
    )`,
    height: '55vh',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center', 
    gap: '1rem',
    flexDirection: 'column'
  }}
>

      <HeroTitle text="Pitch your startup, connect with entrepreneurs"/>
      <Text c={'white'} fz={'lg'}>Submit Ideas, vote on pitches and get noticed in virtual Competitions </Text>
    </Box>
  );
}
