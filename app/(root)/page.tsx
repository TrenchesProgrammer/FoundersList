  import {Box, Text, List} from '@mantine/core'
  import HeroTitle from '../components/HeroTitle';
  import Search from '../components/Search'
  import StartupCard from '../components/StartupCard';
  export default async function Home({searchParams}: {searchParams: Promise<{query?:string}>}) {
    const query = (await searchParams).query || '';

    const posts = [{
      _id:1,
      createdAt: new Date(),
      author:{_id: 1, name:'Heritage'},
      category:'Category',
      title:'Startup',
      views: 55,
      description:'This is a Description',
      image:'https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }]
    return (
      <>
      <Box
        px="lg" 
        py="xl"
        style={{
          backgroundColor: '#3b82f6', 
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
