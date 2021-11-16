import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import './setupprofile.css';
import {towns, states} from './data';

function Setupprofile() {
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        const stateSelect = document.getElementById('stateSel');
        const indianStates = states.states;
        indianStates.forEach(state => {
            const option = document.createElement('option');
            const name = state.state;
            option.text = name;
            stateSelect.appendChild(option);
        })
    }, [towns, states]);

    // state change handler
    const stateChangeHandler = (e) => {
        console.log('State changed to', e.target.value);
        const indianStates = states.states;
        const districtSel = document.getElementById('districtSel');
        indianStates.forEach(state => {
            const name = state.state;
            if (name === 'Haryana') {
                const districts = state.districts;
                districts.forEach(district => {
                    const option = document.createElement('option');
                    option.text = district;
                    districtSel.appendChild(option);
                })
            }
        });
    }

    // remove options helper
    const removeOptions = (selectElement) => {
        let i, L = selectElement.options.length - 1;
        for(i = L; i >= 0; i--) {
           selectElement.remove(i);
        }
    }

    // district change handler
    const districtChangeHandler = (e) => {
        console.log('District changed to', e.target.value);
        const districtChosen = e.target.value;
        setDistrict(districtChosen);

        const townSelect = document.getElementById('townSel');

        // removing the previous options
        removeOptions(townSelect);
        
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Select your city/village';
        townSelect.appendChild(defaultOption);

        if (districtChosen in towns) {
            const townsInDistrict = towns[districtChosen];

            townsInDistrict.forEach(town => {
                const option = document.createElement('option');
                option.text = town;
                townSelect.appendChild(option);
            })
        } else {
            const option = document.createElement('option');
            option.text = 'DEFAULT TOWN';
            townSelect.appendChild(option);
        }
    }

    // city change handler
    const cityChangeHandler = (e) => {
        console.log('City name changed to', e.target.value);
    } 

    return (
        <div>
        <Header />
        <div className="reg-body"> 
        <div className="container-setup">
        <div className="logo">
            <h3>Service Fare</h3>
        </div>
            <div className="setup">
                <h2 className="setup-head2">Complete your Profile</h2>
                <form autocomplete="off">
                    <label id="gender">Choose your Gender :  </label>
                    <select id="gender" >
                        <option>select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>

                        </select>
                        <br />
                        <br />
                        Select State: <select name="state" id="stateSel" size="1" onChange={stateChangeHandler}>
                            <option value="" selected="selected">Select State</option>
                            </select>
                            <br />
                            <br />
                            Select District: <select name="district" id="districtSel" size="1" onChange={districtChangeHandler}>
                            <option value="" selected="selected">Select your district</option>
                            </select>
                            <br />
                            <br />
                            Select Village/City Name: <select name="city" id="townSel" size="1" onChange={cityChangeHandler}>
                            <option value="" selected="selected">Select your city/village</option>
                            </select><br />
                            <br />

                    Pincode: <input type="number" name="reg-pincode" id="reg-pincode" required placeholder="Pincode" />
                    <div className="register-row">
                        
                    </div>
                    <button type="submit" className="setup-btn">Submit</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Setupprofile
