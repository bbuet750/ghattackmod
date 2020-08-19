import React from 'react';
import './App.css';
import {withAuthenticator} from '@aws-amplify/ui-react'


function Main() {
  return (
    <div>
      <h1>This is the Authenticated Component</h1>
    </div>
  )
}

export default withAuthenticator(Main);