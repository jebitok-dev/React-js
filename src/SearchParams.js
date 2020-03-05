import React, {useState, useEffect} from 'react';//useState-hook
import pet, { ANIMALS } from '@frontendmasters/pet';
import dropDown from './dropdown';
//import {usedropDown} from './dropdown';

//function component -must start with capital letter
const SearchParams = () => {
    //replace location
    //location represents current state
    //updateLocation -> function to update state
const [location, updateLocation] = useState("Seattle, WA");
const [breeds, updateBreeds] = useState([]);//animal-current state updateAnimal-fn to change state
const [animal, AnimalDropdown]= dropDown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown, updateBreed] = dropDown("Breed", "", breeds);

    useEffect(() => {
        updateBreeds([]);
        updateBreed('');
        pet.breeds(animal).then(({breeds}) => {
            const breedItems = breeds.map(({name}) => name);
            updateBreeds(breedItems)
        }, console.error)
    }, [animal, updateBreed, updateBreeds])


    return (
        <div className="search-params">
            {name}
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location" 
                        value={location}
                        placeholder="Location"
                        onChange={(e) => updateLocation//event attribute - callback function
                        (e.target.value)}//target-input, value-location
                    />
                </label>
                <AnimalDropdown/> 
                <BreedDropdown/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;