import React, {useState} from 'react';//useState-hook
import { ANIMALS } from '@frontendmasters/pet'
//function component
const SearchParams = () => {
    //replace location
    //location represents current state
    //updateLocation -> function to update state
const [location, updateLocation] = useState("Seattle, WA");
const [animal, updateAnimal] = useState("");//animal-current state updateAnimal-fn to change state
const [breed, setBreed]= useState("");
const [breeds, updateBreeds] = useState([]);
    return (
        <div className="search-params">
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
                <label htmlFor="animal">
                    Animal
                    <select //comes with dropdown option
                        id="animal"
                        value={animal}
                        onChange={(e) => updateAnimal(e.target.value)} //making change on animal
                        onBlur={(e) => updateAnimal(e.target.value)}//target-select, value-animal
                    >
                        {ANIMALS.map(animal => {//.map whatever you choose from select options
                            return <option key={animal}>{animal} ></option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                    disable={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={(e)=> updateBreeds(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => {
                            return<option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
} 

export default SearchParams;