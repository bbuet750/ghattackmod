import React from 'react';
import './App.css';
import {AmplifySignOut} from '@aws-amplify/ui-react'

var signO = null
var testvar = "working"

function checkSignout(signout, user){
    if(signout===true){
        return (
            <div>
                <p>Welcome {user}</p>
                <AmplifySignOut/>
            </div>)
    }else{
        return null
    }
}

export function TestVar() {
    return testvar
}

function Nav(props) {
    signO = checkSignout(props.signout, props.user)
    
  return (
    <div>
        <button>Char</button>
        <button>Play</button>
        {signO}
    </div>
  )
}

export default Nav;