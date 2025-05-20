  import {Box, Text, List} from '@mantine/core'
  import HeroTitle from '../components/HeroTitle';
  import Search from '../components/Search'
  import StartupCard from '../components/StartupCard';
  export default async function Home({searchParams}: {searchParams: Promise<{query?:string}>}) {
    const query = (await searchParams).query || '';

    const posts = [{
      _id:1,
      createdAt: new Date(),
      author:{_id: 1},
      views: 55,
      description:'This is a Description'
    }]
    return (
      <>
      <Box
        px="lg" 
        py="xl"
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
            <Text ta={'center'} c={'white'} fz={'lg'}>Submit Ideas, vote on pitches and get noticed in virtual Competitions </Text>
            <Search query={query}/>
          </Box>   
          <Box p={'lg'} >
            <Text fz={20} fw={600}>{query ? `Search results for "${query}"` : 'All Startups'}</Text> 
            <List>
              {posts.length > 0 ? (posts.map((post:startuptypecard, index:number) => (
                <StartupCard key={post?._id} post={post}/>
              ))) :(
                <Text fz={20} fw={600}>No results found</Text>
              )}
              
            </List>
          </Box>
    
      </>

    );
  }
