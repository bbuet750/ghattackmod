import React from 'react';
import './App.css';
import {AmplifySignOut} from '@aws-amplify/ui-react'


function Nav() {
  return (
    <div>
        <button>Char</button>
        <button>Play</button>
        <AmplifySignOut/>
    </div>
  )
}

export default Nav;