import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonAPI"
import Image from "next/image";
// pokemonName

// pokemonName = "pikachu" -> show the Pikachu page

export default async function PokemonPage({ params } : {params: { pokemonName: string } }){
    // object destructuring
    const { pokemonName } = params;
    // pikachu
    // get the API data for pikachu
    const pokemonObject = await getPokemon(pokemonName);

    // console.log(pokemonObject);

    return(
        <>
            <h1 className="text-4xl text-bold pt-4 capitalize">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{ position: "relative", width:'300px', height:'300px'}}>
                <PokemonImage
                    name={pokemonName}
                    image={pokemonObject.sprites.other['dream_world'].front_default}
                />
            </div>
            <h3 className="py-2">Weight: {pokemonObject.weight}</h3>
            <div className="flex-col">
                {pokemonObject.stats.map( (statObject: any) => {
                    const statName = statObject.stat.name;
                    const statValue = statObject.base_stat;

                    return (
                        <div className="flex items-stretch w-[350px] lg:w-[500px]" key={statName}>
                            <h3 className="p-3 w-2/4">{statName.charAt(0).toUpperCase() + statName.slice(1)}: {statValue}</h3>
                            <Progress value={statValue} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}