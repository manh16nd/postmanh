import React, { useState } from 'react'
import { HomeProvider } from '../context/HomeContext'
import Request from './Request'

const Home = props => {
    const [_request, _setRequest] = useState({
        method: 'get',
        url: 'https://postmanh.now.sh',
        path: '',
        label: '',
    })

    const _saveRequest = objectValue => _setRequest({ ..._request, ...objectValue })

    const _sendRequest = () => {
        
    }

    return <HomeProvider value={{ request: _request, setRequest: _saveRequest, sendRequest: _sendRequest }}>
        <Request />
    </HomeProvider>
}

export default Home