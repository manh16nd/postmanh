import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './shared/components/Header'
import HomeContainer from './home/components/HomeContainer'

function App() {

    return <div className="bg-gray-700 min-h-screen">
        <Header />
        <div className="p-6 font-body">
            <Switch>
                <Route exact path='/' component={HomeContainer} />
            </Switch>
        </div>
    </div>
}

export default App
