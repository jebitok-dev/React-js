import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div>
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet
                            id={pet.id}
                            animal={pet.name}
                            key={pet.id}
                            name={pet.breeds.primary}
                            media={pet.photos}
                            location={`${pet.contact.address.city}, 
                            ${pet.contact.address.state}` }
                        />
                    )
                })
            )}
        </div>
    ) 
}

export default Results;