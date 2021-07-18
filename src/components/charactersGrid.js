import React from 'react'
import CharacterItem from "./CharacterItem"
import Spinner from "../components/Spinner"

const charactersGrid = ({isLoading, items}) => {
    return isLoading 
    ?
    (<Spinner/>)
    :
    (<section className="cards">
    {items.map(item=>(
        <CharacterItem key={item.id} item={item}></CharacterItem>
    ))}
        </section>
    )
}

export default charactersGrid
