import React, {useState} from 'react';//useState-hook
import { ANIMALS } from '@frontendmasters/pet'
import dropDown from './dropdown'
//function component
const SearchParams = () => {
    //replace location
    //location represents current state
    //updateLocation -> function to update state
const [location, updateLocation] = useState("Seattle, WA");
const [breeds, updateBreeds] = useState([]);//animal-current state updateAnimal-fn to change state
const [animal, AnimalDropdown]= dropDown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown] = dropDown("Breed", "", breeds);
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