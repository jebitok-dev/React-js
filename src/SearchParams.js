import React, {useState} from 'react';
//function component
//replaceLocation

const SearchParams = () => {
    //location represents current state
    //updateLocation -> function to update state
const [location, updateLocation] = useState("Seattle, WA")
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
                <button>Submit</button>
            </form>
        </div>
    )
} 

export default SearchParams;