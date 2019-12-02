import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './shared/components/Header'
import HomeContainer from './home/components/HomeContainer'
import Sidebar from './shared/components/Sidebar'

function App() {

    return <div className="bg-gray-700 min-h-screen">
        <Header />
        <div className="flex px-6 py-2 body-height">
            <div className="w-0 lg:w-1/12 h-full pr-2">
                <Sidebar />
            </div>
            <div className="font-body w-full overflow-scroll lg:w-11/12">
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                </Switch>
            </div>
        </div>
    </div>
}

export default App
