import React from 'react';
import Pet from './Pet';
/* eslint-disable */

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          id={pet.id}
          animal={pet.name}
          key={pet.id}
          name={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city}, 
                            ${pet.contact.address.state}`}
        />
      ))
    )}
  </div>
);

export default Results;
