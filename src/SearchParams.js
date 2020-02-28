import React, {useState} from 'react';
//function component
//replaceLocation

const SearchParams = () => {
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
                        onChange={(e) => updateLocation
                        (e.target.value)}
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
} 

export default SearchParams;