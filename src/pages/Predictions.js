import React from 'react';
import RegularSeason from './RegularSeason';
import Postseason from './Postseason';
import Versus from './Versus';
import Overunder from './Overunder';
import Awards from './Awards';
import Hero from '../videos/Hero.mp4';
import {Link, Outlet} from 'react-router-dom';

const Predictions = () => {
    return (
        <div id="predictionsBg">

        {/* HERO HEADING */}
            <div id="predictionsHero" >
            <video id='heroVideo' src={Hero} autoPlay loop muted />

{/* HERO WELCOME MESSAGE */}
                <div id="HeroBox">
                    <h1 id='heroTitle'> WELCOME TO THE PARTY</h1>
                    <div id='heroText'>
                     NFLSTRADAMUS IS THE PERFECT PLACE TO TEST YOUR FOOTBALL
                     FORTUNE-TELLING SKILLS. MAKE YOUR PREDICTIONS OF WHO WILL BE THE 
                     SEASON'S BIGGEST WINNERS AND SOREST LOSERS, THEN SIT BACK AND ENJOY
                      EVERY SNAP OF THE SEASON. WITH SOMETHING ON THE LINE FROM THE OPENING 
                      KICKOFF TO THE FINAL WHISTLE, ITS TIME TO SEE WHO'S THIRD EYE HAS BEEN OPEN 
                      SINCE THE OFF-SEASON.
                    </div>
                    <h5 id='scrollReminder'>SCROLL TO BEGIN</h5>
                </div>
            </div>


{/* PREDICTION CATEGORY CARDS */}
            <div className="cardWrapper">


{/* PREDICTION TALLY/SUBMIT */}
                <div className='predictionTally'>
                    <span id='completedTally'>
                        0
                    </span>
                    <span id='totalTally'>
                        /5 COMPLETED
                    </span>
                    <button type='submit' id='predictionsSubmitBtn'>
                        <Link to='/home' className='link' id='predictionsSubmitLink'>
                            SUBMIT
                        </Link>
                    </button>
                    <p id='predictionTallyText'>
                        COMPLETE ALL OF THE PREDICTIONS FOR EACH CATEGORY TO ADVANCE
                        <br/>
                         >


                    </p>
                </div>

{/* PREDICTION CATEGORIES */}
                <button className="categoryCard" id='regularSeasonCard'>
                    <Link to='/regularseason' className='link, cardLink' element= {<RegularSeason/>}>
                        Regular Season
                    </Link>
                </button>

                <button className="categoryCard" id='postseasonCard'>
                    <Link to='/postseason' className='link, cardLink' element= {<Postseason/>}>
                        Postseason
                    </Link>
                </button>

                <button className="categoryCard" id='versusCard'>
                    <Link to='/versus' className='link, cardLink' element= {<Versus/>}>
                        Versus
                    </Link>
                </button>

                <button className="categoryCard" id='overunderCard'>
                    <Link to='/overunder' className='link, cardLink' element= {<Overunder/>}>
                        Over/Under
                    </Link>
                </button>

                <button className="categoryCard" id='awardsCard'>
                    <Link to='/awards' className='link, cardLink' element= {<Awards/>}>
                        Awards
                    </Link>
                </button><br/>
            </div>

{/* FOOTER */}
            <footer className='Footer'>
            </footer>
            
            <Outlet/>
        </div>
    );
}

export default Predictions;