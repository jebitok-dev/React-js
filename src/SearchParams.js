import React, {useState} from 'react';
import { ANIMALS } from '@frontendmasters/pet'
//function component
//replaceLocation
const SearchParams = () => {
    //location represents current state
    //updateLocation -> function to update state
const [location, updateLocation] = useState("Seattle, WA");
const [animal, updateAnimal] = useState("");//animal-current state updateAnimal-fn to change state
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input
                        id="location" 
                        value={location}
                        placeholder="Location"
                        onChange={(e) => updateLocation//event takes callback function
                        (e.target.value)}
                     />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => updateAnimal(e.target.value)} //making change on animal
                        onBlur={(e) => updateAnimal(e.target.value)}
                    >
                        {ANIMALS.map(animal => {
                            return <option value={animal}>{animal} ></option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
} 

export default SearchParams;