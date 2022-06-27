import React from 'react';
import RegularSeason from './RegularSeason';
import Postseason from './Postseason';
import Versus from './Versus';
import Overunder from './Overunder';
import Awards from './Awards';
import {Link, Outlet} from 'react-router-dom';

const Predictions = () => {
    return (
        <div className="predictionsBg">
            <h1>Predictions</h1>
            <div className="cardWrapper">

                <button className="categoryCard" id='regularSeasonCard'>
                    <Link to='/regularseason' className='link, cardLink '  element= {<RegularSeason/>}>
                        Regular Season
                    </Link>
                </button>

                <button className="categoryCard">
                    <Link to='/postseason' element= {<Postseason/>}>
                        PostSeason
                    </Link>
                </button>

                <button className="categoryCard">
                    <Link to='/versus' element= {<Versus/>}>
                        Versus
                    </Link>
                </button>

                <button className="categoryCard">
                    <Link to='/overunder' element= {<Overunder/>}>
                        Over/Under
                    </Link>
                </button>

                <button className="categoryCard">
                    <Link to='/awards' element= {<Awards/>}>
                        Awards
                    </Link>
                </button><br/>
            </div>
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