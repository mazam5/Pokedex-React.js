import { useDispatch } from 'react-redux';
import { actions } from '../store';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Filter() {
  const dispatch = useDispatch();
  const { setFilter } = useContext(AppContext);

  const handleFilter = () => {
    const selectedValue = document.querySelector('select').value;

    if (selectedValue === 'all') {
      setFilter(false);
    } else {
      setFilter(true);
      dispatch(actions.filterPokemons({ types: selectedValue }));
    }
  };

  return (
    <select
      className="border-2 focus:border-blue-400 hover:border-blue-400 border-gray-300 rounded-md md:p-2 focus:outline-none"
      onChange={handleFilter}
    >
      <optgroup>
        <option value="all">All</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="grass">Grass</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="steel">Steel</option>
      </optgroup>
    </select>);
}
