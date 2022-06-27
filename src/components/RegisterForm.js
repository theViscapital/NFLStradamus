import React from 'react';
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="registerCard">
            <img id='registerLogo'src={Logo} alt='Logo' />
            <h2 id='formHeader'>NEW USER</h2>
            <form className='registerNewUser'>
                <input required className="form-control" id='userName' type="text" placeholder='Username'/><br/>
                <input required className="form-control" id='email' type="email" placeholder="Email@domain"/><br/>
                <input required className="form-control" id='firstName' type='text' placeholder='First Name'/>
                <input required className="form-control" id='lastName' type='text' placeholder='Last Name'/><br/>
                <input required className="form-control" id='password' type="password" autoComplete="new-password" placeholder='Password'/>
                <input required className="form-control" id='confirmPassword' type="password" autoComplete="new-password" placeholder='Confirm Password'/><br/>
                <select required className="form-control" id='favTeam' name="favTeam">
                    <option disabled default value="">Select Your Favorite NFL Team</option>
                    <option className="team" value="Cardinals"> Arizona Cardinals </option>
                    <option className="team" value="Falcons"> Atlanta Falcons </option>
                    <option className="team" value="Ravens"> Baltimore Ravens </option>
                    <option className="team" value="Bills"> Buffalo Bills </option>
                    <option className="team" value="Panthers"> Carolina Panthers </option>
                    <option className="team" value="Bears"> Chicago Bears </option>
                    <option className="team" value="Bengals"> Cincinnati Bengals </option>
                    <option className="team" value="Browns"> Cleveland Browns </option>
                    <option className="team" value="Cowboys"> Dallas Cowboys </option>
                    <option className="team" value="Broncos"> Denver Broncos </option>
                    <option className="team" value="Lions"> Detroit Lions </option>
                    <option className="team" value="Packers"> Green Bay Packers </option>
                    <option className="team" value="Texans"> Houston Texans </option>
                    <option className="team" value="Colts"> Indianapolis Colts </option>
                    <option className="team" value="Jaguars"> Jacksonville Jaguars </option>
                    <option className="team" value="Chiefs"> Kansas City Chiefs </option>
                    <option className="team" value="Raiders"> Las Vegas Raiders </option>
                    <option className="team" value="Chargers"> Los Angeles Chargers </option>
                    <option className="team" value="Rams"> Los Angeles Rams </option>
                    <option className="team" value="Dolphins"> Miami Dolphins </option>
                    <option className="team" value="Vikings"> Minnesota Vikings </option>
                    <option className="team" value="Patriots"> New England Patriots </option>
                    <option className="team" value="Saints"> New Orleans Saints </option>
                    <option className="team" value="Giants"> New York Giants </option>
                    <option className="team" value="Jets"> New York Jets </option>
                    <option className="team" value="Eagles"> Philadelphia Eagles </option>
                    <option className="team" value="Steelers"> Pittsburgh Steelers </option>
                    <option className="team" value="49ers"> San Francisco 49ers </option>
                    <option className="team" value="Seahawks"> Seattle Seahawks </option>
                    <option className="team" value="Buccaneers"> Tampa Bay Buccaneers </option>
                    <option className="team" value="Titans"> Tennessee Titans </option>
                    <option className="team" value="Commanders"> Washington Commanders </option>
                </select><br/>

                <div className='formBtns'>
                    <button type="submit" id="submitFormBtn">
                        <Link to='/predictions' className='link' id='registerSubmitLink'>
                            REGISTER
                        </Link>
                    </button>

                    <button type="reset" id="resetFormBtn">
                        RESET
                    </button>
                </div>

            </form>
        </div>
    );
};

export default RegisterForm;

