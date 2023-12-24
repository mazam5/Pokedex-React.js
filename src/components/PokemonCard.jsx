import PropTypes from 'prop-types';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const id = String(pokemon.id).padStart(3, '0');
  const types = pokemon.types;

  return (
    <section className={`hover:scale-105 rounded-xl bg-gradient-to-br p-4 top-0 right-0 cursor-pointer ${id % 2 ? `from-blue-400 to-blue-800` : id % 3 ? `from-orange-400 to-orange-800` : `from-green-400 to-green-800`}`}>
      <p className='text-white text-right md:text-3xl md:font-semibold'>{`#${id}`}</p>
      <div>
        <svg
          viewBox="0 0 600 500"
          className='mx-auto w-40 h-40'
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={
            { __html: pokemon.image }
          }
        />
      </div>
      <p className='md:text-xl font-semibold mb-2 text-white'>{name}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {types.map((type, index) => (
          <span
            key={index}
            className={`bg-gradient-to-l text-white rounded-full px-3 py-1 text-sm`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </section>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
