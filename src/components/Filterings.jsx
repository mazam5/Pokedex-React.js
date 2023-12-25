import Filter from './Filter'
import SearchBar from './Searchbar'


export default function Filterings() {
    return (
        <div className='md:w-4/5 w-full md:mx-auto justify-between flex md:justify-around my-4'>
            <SearchBar />
            <Filter />
        </div>
    )
}
