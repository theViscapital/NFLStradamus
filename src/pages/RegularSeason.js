import React from 'react';
import {Link} from 'react-router-dom';

const RegularSeason = () => {
    return (
        <div>
            <h1>Regular Season</h1>
            <button type='submit'>
                <Link to='/predictions'>
                    Submit Picks
                </Link>
            </button>
        </div>
    );
};

export default RegularSeason;