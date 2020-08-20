import React from 'react';
import './App.css';
import { withAuthenticator} from '@aws-amplify/ui-react';

class Main extends React.Component {
    constructor (props){
        super(props)
        this.state ={
            signedIn:false,
            color:'Blue'
        }
    }

render() {
    return (
        <div>
            <h1>{`Am I signed in?: ${this.state.signedIn}`}</h1>
            <p>{this.state.color}</p>
        </div>
    )
}

}

export default withAuthenticator(Main);