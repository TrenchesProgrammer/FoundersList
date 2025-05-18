import Form from 'next/form'
import '../globals.css'
import SearchFormReset from './SearchFormReset'
import {IconSearch} from '@tabler/icons-react'
const Search = ({query}: {query?:string}) => {

  return (
    <Form className='search-form' style={{width:'450px'}} action='/' scroll={false}>
        <input
            className='search-form-input'     
            name='query'
            placeholder='Search Startups'
         />
             {query && <SearchFormReset/>}
        <button style={{alignSelf:'flex-end'}} className='search-btn' type='submit'>
            <IconSearch size={20} color={'white'}/>
        </button>
    </Form>
  )
}

export default Search