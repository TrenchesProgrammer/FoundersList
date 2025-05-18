'use client'
import '../globals.css'
import Link  from 'next/link'
const SearchFormReset = () => {
        const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset();
    }
return (
    <button className='search-btn' type='reset' onClick={reset}>
        <Link href='/'  >
            x
        </Link>
    </button>
)
}

export default SearchFormReset