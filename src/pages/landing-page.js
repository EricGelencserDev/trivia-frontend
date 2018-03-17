import React, { Component } from 'react'
import SignIn from '../components/signIn'
import '../App.css';
import Chat from '../components/chat'

class LandingPageView extends Component {
    constructor (props) {
        super();
        this.onSignIn = props.onSignIn;
    }
  render() {
    return (
        <div className="home-bg">
            <div>
                <h1 className="devX">DevX Trivia</h1>
            </div>
            <div className="container">
                <div className="signin">
                    <h3>Enter username</h3>
                    <Chat username = "Bob User"/>
                        <SignIn onSignIn = {this.onSignIn}/>

                </div>
            </div>
        </div>
    );
  }
}
export default LandingPageView;
