import React from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div>
            <form className='registerNewUser'>
                <input required type="text" placeholder='Username'/><br/>
                <input required type="email" placeholder="Email"/><br/>
                <input required type='text' placeholder='First Name'/>
                <input required type='text' placeholder='Last Name'/><br/>
                <input required type="password" autoComplete="new-password" placeholder='Password'/>
                <input required type="password" autoComplete="new-password" placeholder='Confirm Password'/><br/>
                <select required name="favTeam" id="favTeam">
                    <option disabled default value="">Select Your Favorite NFL Team</option>
                    <option value="Cardinals"> Arizona Cardinals </option>
                    <option value="Falcons"> Atlanta Falcons </option>
                    <option value="Ravens"> Baltimore Ravens </option>
                    <option value="Bills"> Buffalo Bills </option>
                    <option value="Panthers"> Carolina Panthers </option>
                    <option value="Bears"> Chicago Bears </option>
                    <option value="Bengals"> Cincinnati Bengals </option>
                    <option value="Browns"> Cleveland Browns </option>
                    <option value="Cowboys"> Dallas Cowboys </option>
                    <option value="Broncos"> Denver Broncos </option>
                    <option value="Lions"> Detroit Lions </option>
                    <option value="Packers"> Green Bay Packers </option>
                    <option value="Texans"> Houston Texans </option>
                    <option value="Colts"> Indianapolis Colts </option>
                    <option value="Jaguars"> Jacksonville Jaguars </option>
                    <option value="Chiefs"> Kansas City Chiefs </option>
                    <option value="Raiders"> Las Vegas Raiders </option>
                    <option value="Chargers"> Los Angeles Chargers </option>
                    <option value="Rams"> Los Angeles Rams </option>
                    <option value="Dolphins"> Miami Dolphins </option>
                    <option value="Vikings"> Minnesota Vikings </option>
                    <option value="Patriots"> New England Patriots </option>
                    <option value="Saints"> New Orleans Saints </option>
                    <option value="Giants"> New York Giants </option>
                    <option value="Jets"> New York Jets </option>
                    <option value="Eagles"> Philadelphia Eagles </option>
                    <option value="Steelers"> Pittsburgh Steelers </option>
                    <option value="49ers"> San Francisco 49ers </option>
                    <option value="Seahawks"> Seattle Seahawks </option>
                    <option value="Buccaneers"> Tampa Bay Buccaneers </option>
                    <option value="Titans"> Tennessee Titans </option>
                    <option value="Commanders"> Washington Commanders </option>
                </select><br/>
                
                <button type="submit">
                    <Link to='/predictions'>
                        Register
                    </Link>
                </button>

                <button type="reset">
                    Reset
                </button>

                </form>
        </div>
    );
};

export default RegisterForm;

