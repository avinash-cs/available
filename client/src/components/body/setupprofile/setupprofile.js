import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import './setupprofile.css';
import {towns, states} from './data';
import axios from 'axios';
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'

import {useSelector, useDispatch} from 'react-redux'

const initialState = {
   
    pincode:'',
    err: '',
    success: ''
}
function Setupprofile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)
    const user = auth;
    const [loading, setLoading] = useState(false)
    
    const [data, setData] = useState(initialState)
    const {pincode, err, success} = data
    const dispatch = useDispatch()
    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }
    useEffect(() => {
        if(user){
           
        }
    },[token,user])




    const updateInfor = () => {
        try {
            axios.patch('/user/setupprofile', {
                pincode:pincode?pincode:user.pincode,
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(pincode) updateInfor()
        
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
            <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
             </div>
                <h2 className="setup-head2">Complete your Profile</h2>
                <form autocomplete="off">
                    {/* <label id="gender">Choose your Gender :  </label>
                    <select id="gender" onChange={genderHandler}>
                        <option >select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
  
                    </select>
                        <br />
                        <br />
                        Select State: <select name="state" id="stateSel" size="1" onChange={stateChangeHandler}>
                                <option value="" selected="selected" >Select State</option>
                            </select>
                            <br />
                            <br />
                            Select District: <select name="district" id="districtSel" size="1" onChange={districtChangeHandler}>
                          
                              <option value="" selected="selected" >Select your district</option>
                          
                            </select>
                            <br />
                            <br />
                            Select Village/City Name: <select name="city" id="townSel" size="1" onChange={cityChangeHandler}>
                            <option value="" selected="selected" >Select your city/village</option>
                            </select><br />
                            <br /> */}

                    Pincode: <input type="number" name="reg-pincode" id="reg-pincode" required placeholder="Pincode" onChange={updateInfor}  defaultValue={user.pincode}/>
                    <div className="register-row">
                        
                    </div>
                    <button type="submit" className="setup-btn" onClick={handleUpdate}>Submit</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Setupprofile