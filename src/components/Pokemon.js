import {useState, useEffect} from 'react'

function Pokemon(){

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        const response = await fetch("https://dummydata.netlify.app/pokedex.json")
        const data = await response.json()
        setPokemon(data.pokemon)
    }

    useEffect(() => {getPokemon()}, [])

    // USING MAP FUNCTION
    // return pokemon.length === 0 ? <h1>No Pokemon</h1> : pokemon.map((currentPoke) => {
    //     return <h1>{currentPoke.name}</h1> 
    // })

    // USING IF/ELSE STATEMENT
    if (pokemon.length === 0){
        return <h1>No pokemon</h1>
    } else {
        return pokemon.map((currentPoke) => {
           return <h1>{currentPoke.name}</h1> 
        })
    }

}
export default Pokemon