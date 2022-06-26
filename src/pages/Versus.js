import React from 'react';
import {Link} from 'react-router-dom';

const Versus = () => {
    return (
        <div>
            <h1>Versus</h1>
            <button type='submit'>
                <Link to='/predictions'>
                    Submit Picks
                </Link>
            </button>
        </div>
    );
};

export default Versus;