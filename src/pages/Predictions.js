import React from 'react';
import RegularSeason from './RegularSeason';
import Postseason from './Postseason';
import Versus from './Versus';
import Overunder from './Overunder';
import Awards from './Awards';
import {Link, Outlet} from 'react-router-dom';

const Predictions = () => {
    return (
        <div>
            <h1>Predictions</h1>
            <button>
                <Link to='/regularseason' element= {<RegularSeason/>}>
                    Regular Season
                </Link>
            </button>

            <button>
                <Link to='/postseason' element= {<Postseason/>}>
                     PostSeason
                </Link>
            </button>

            <button>
                <Link to='/versus' element= {<Versus/>}>
                     Versus
                </Link>
            </button>

            <button>
                <Link to='/overunder' element= {<Overunder/>}>
                     Over/Under
                </Link>
            </button>

            <button>
                <Link to='/awards' element= {<Awards/>}>
                     Awards
                </Link>
            </button><br/>

            <button type='submit'>
                <Link to='/home'>
                Submit
                </Link>
            </button>


            <Outlet/>
        </div>
    );
}

export default Predictions;