import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from '@reach/router';
import Details from './Details';
import SearchParams from './SearchParams'

const App = () => {
    return (
        <div>
            <h1>Adopt Pets!</h1>
            <Router>
                <SearchParams path='/' />
                <Details path="/details/:id" />
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));