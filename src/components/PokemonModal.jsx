import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function PokemonModal(props) {
  const { pokemon } = props;
  const { setModal } = useContext(AppContext);
  const id = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
      <div className="relative z-50 w-11/12 p-8 mx-auto my-3 overflow-y-auto bg-white rounded shadow-lg sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div className="flex items-start justify-between">
          <h3 className="text-3xl font-bold text-gray-800">Pokemon Details</h3>
          <button
            onClick={() => setModal(false)}
            className="text-3xl font-semibold leading-none text-gray-800 bg-transparent border-0 outline-none opacity-60 cursor-pointer"
          >
            ×
          </button>
        </div>
        <hr className="my-3" />
        <div>
          <div className="flex justify-evenly">
            <p className="text-2xl font-semibold text-gray-600">{id}</p>
            <p className="text-2xl font-semibold text-gray-800">{name}</p>
          </div>
          <div className="flex justify-around text-lg font-semibold text-gray-700">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className={`mr-2 mb-2 inline-block text-white rounded-full px-4 py-2 text-sm ${type.type.name === 'grass' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="text-lg font-semibold text-gray-700">
            <h3>Stats:</h3>
            {pokemon.stats.map((stat, index) => (
              <div
                key={index}
                className={`flex md:justify-between items-center mr-2 mb-2 rounded-full px-4 py-2 text-sm`}
              >
                <p className='text-left flex-1'>
                  {stat.stat.name}
                </p>
                <p className="ml-2">
                  {stat.base_stat}
                </p>
                <div>
                  <meter className={`ml-3`}
                    style={{
                      color: `stat.base_stat > 100 ? 'green' : stat.base_stat > 50 ? 'orange' : 'red'`
                    }}
                    min="0" max="220" value={stat.base_stat} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
