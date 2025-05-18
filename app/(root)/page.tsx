import {Box, Title} from '@mantine/core'
import HeroTitle from '../components/HeroTitle';
export default function Home() {
  return (
    <Box px={'lg'} bg={'blue.5'} style={{ 
        backgroundColor: '#3b82f6', // blue-500 from Tailwind, or use Mantine's theme if desired
        backgroundImage: `repeating-linear-gradient(
          to right,
          rgba(255, 255, 255, 0.2),  /* line color with opacity */
          rgba(255, 255, 255, 0.2) 1px,
          transparent 1px,
          transparent 20px
        )`,
        height: '55vh', // adjust as needed
    }}>
      <HeroTitle text="Pitch your startup, connect with entrepreneurs"/>

    </Box>
  );
}
