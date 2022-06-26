import React from 'react';
import {Link} from 'react-router-dom';

const Awards = () => {
    return (
        <div>
            <h1>Awards</h1>
            <button type='submit'>
                <Link to='/predictions'>
                    Submit Picks
                </Link>
            </button>
        </div>
    );
};

export default Awards;