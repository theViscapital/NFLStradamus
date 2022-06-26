import React from 'react';
import {Link} from 'react-router-dom';

const PostSeason = () => {
    return (
        <div>
            <h1>Postseason</h1>

            <button type='submit'>
                <Link to='/predictions'>
                    Submit Picks
                </Link>
            </button>
        </div>
    );
};

export default PostSeason;