import Form from 'next/form'
import '../globals.css'
import { Box } from '@mantine/core'
import SearchFormReset from './SearchFormReset'
import {IconSearch} from '@tabler/icons-react'
const Search = ({query}: {query?:string}) => {

  return (
    <Form className='search-form' style={{width:'450px'}} action='/' scroll={false}>
        <input
            className='search-form-input'     
            name=''
            defaultValue={query}
            placeholder='Search Startups'
         />
             {query && <SearchFormReset/>}
        <button className='search-btn' type='submit'>
            <IconSearch size={20} color={'white'}/>
        </button>
         <Box></Box>
    </Form>
  )
}

export default Search