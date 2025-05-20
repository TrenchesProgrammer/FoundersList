import {Box, Text} from '@mantine/core'
import formatDate from '../FormatDate'
const StartupCard = ({post}: {post:startuptypecard}) => {
  return (
        <Box>
            <Text>{formatDate(post.createdAt)}</Text>
        </Box>
        
  )
}

export default StartupCard