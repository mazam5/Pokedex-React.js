import Filter from './Filter'
import SearchBar from './Searchbar'


export default function Filterings() {
    return (
        <div className='md:w-4/5 w-full md:mx-auto flex justify-between my-5'>
            <SearchBar />
            <Filter />
        </div>
    )
}
