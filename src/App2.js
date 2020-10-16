import React from "react"
import ReactDOM from "react-dom"

import User from './User'
import withUserId from './withUserId'
import AlertButton from './components/AlertButton'

const SpecificUser = withUserId(User)

function App() {
    return (
        // <User
        //     user={{
        //         name: 'Luc',
        //         email: 'khkh',
        //         username: "lik"
        //     }}
        // />
        <div>
        <SpecificUser userId={1}/>
        <SpecificUser userId={2}/>
        <AlertButton name="Button"/>
        </div>
    )
}


export default App;
