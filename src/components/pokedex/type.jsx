import PokemonCard from './card';
function PokemonType() {
 const [pokemons, setPokemons] = useState([]);
 
    useEffect(() => {
        async function getData() {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/type/fire`
            );
            setPokemons(response.data.results);
            
        }

        getData();
    },
    );
    return (
         <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-3" key={pokemon.name}>
           
                <PokemonCard component={'span'} pokemonName={pokemon.name} />
               
          </div>
        ))}
      </div>
  )
}