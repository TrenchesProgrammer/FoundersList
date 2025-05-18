import {Box, Title} from '@mantine/core'
const HeroTitle = ({text}: {text:String}) => {
  return (
    <>
        <Box bg={'black'} w={'fit-content'} p={'lg'} m={'auto'} >
            <Title style={{color:'white'}} order={1} ta={'center'} >
                {text.toUpperCase()}
            </Title>
        </Box>
    </>
  )
}

export default HeroTitle