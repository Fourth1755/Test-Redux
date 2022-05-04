import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'


const Signin=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()
    return(
        <div className="container">
            <form>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" value={username} onChange={e=>setUsername(e.target.value)} placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder=""/>
                </div>
                <button onClick={dispatch()}>Submit</button>    
            </form>
        </div>
    );
}
export default Signin;