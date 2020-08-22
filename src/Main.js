import React from 'react';
import './App.css';
import { withAuthenticator} from '@aws-amplify/ui-react';

import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

onAuthUIStateChange((nextAuthState, authData) => {
    if (nextAuthState === AuthState.SignedIn) {
      console.log('user successfully signed in!');
      Main.setState({signedIn:true})
    }
  })



class Main extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            signedIn:false, 
            color:'Blue'
        }
    }

    

    render() {
        if(this.state.signedIn === true){
            return(
                <div>YAY</div>
            )
        }else{
        return (
            <div>
                <h1>{`Am I signed in?: ${this.state.signedIn}`}</h1>
                <p>{this.state.color}</p>
            </div>
        )
        }

    }
}
export default withAuthenticator(Main);