import {useContext} from 'react'
import { SearchContext } from '../context/SearchContext';

function SearchBar () {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <div>
            <form>
                <input type="text" placeholder="Search Here" ref={term} onChange={(e) => handleSearch(e, term.current.value)} />
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar