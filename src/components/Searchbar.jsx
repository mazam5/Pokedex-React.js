import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { AppContext } from "../context/AppContext";
import { actions } from "../store";

export default function Searchbar() {
  const { setSearch } = useContext(AppContext);
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  // search pokemons
  const handleSearch = (e) => {
    setSearch(true);
    setSearchString(e.target.value);
    dispatch(actions.searchPokemons(e.target.value));
  }
  return <div>
    <input type="text" placeholder="Search Pokemon"
      className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-400"
      value={searchString}
      onChange={handleSearch} />
  </div>;
}
