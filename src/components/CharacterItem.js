import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.image} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong>{item.name}
                        </li>
                        <li>
                            <strong>Species:</strong>{item.species}
                        </li>
                        <li>
                        <strong>Status:</strong> {item.status}
                        </li>
                        <li>
                        <strong>Gender:</strong> {item.gender}
                        </li>
                        <li>
                        <strong>Location:</strong> {item.location.name}
                        </li>
                        <li>
                        <strong>Episodes:</strong> {item.episode.length}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CharacterItem