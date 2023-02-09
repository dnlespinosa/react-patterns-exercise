import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Dogs from './Dogs'
import DogDetails from './DogDetails'

function Routes (props) {
    return (
        <>
        <Switch>
            <Route exact path='/dogs/'>
                <Dogs array={props}/></Route>
            <Route exact path='/dogs/:name'>
                <DogDetails array={props}/></Route>
            <Redirect to='dogs' />
        </Switch>
        </>
    )
}

export default Routes