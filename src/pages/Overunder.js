import React from 'react';
import {Link} from 'react-router-dom';

const Overunder = () => {
    return (
        <div>
            <h1>Over/Under</h1>
            <button type='submit'>
                <Link to='/predictions'>
                    Submit Picks
                </Link>
            </button>
        </div>
    );
};

export default Overunder;