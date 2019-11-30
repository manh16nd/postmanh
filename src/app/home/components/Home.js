import React, { useState } from 'react'
import { HomeProvider } from '../context/HomeContext'
import Request from './Request'
import createApiRequest from '../../../services/api/createApiRequest'
import Data from './Data'
import { setLocalStorage, getLocalStorage } from '../../../services/localStorage'
import Err from './Err'

const Home = props => {
    const [_request, _setRequest] = useState({
        method: getLocalStorage('method') || 'get',
        url: getLocalStorage('url') || 'https://postmanh.now.sh',
        path: getLocalStorage('path') || '',
        label: getLocalStorage('label') || '',
        data: {},
        headers: getLocalStorage('headers') || {}
    })

    const [_loading, _setLoading] = useState(false)

    const [_resp, _setResp] = useState(null)

    const [_err, _setErr] = useState(null)

    const _saveRequest = objectValue => _setRequest({ ..._request, ...objectValue })

    const _saveRequestToLocal = request => {
        const { method, url, path, label, headers } = request
        const startQuery = path.indexOf('?')
        const newPath = startQuery >= 0 ? path.substring(0, path.indexOf('?')) : path
        setLocalStorage('method', method)
        setLocalStorage('url', url)
        setLocalStorage('path', newPath)
        setLocalStorage('label', label)
        setLocalStorage('headers', headers)
    }

    const _sendRequest = async () => {
        const url = `${_request.url}${_request.path}`
        const req = { ..._request, url }
        _saveRequestToLocal(_request)
        _setResp(null)
        _setErr(null)
        _setLoading(true)
        try {
            const data = await createApiRequest(req)
            _setLoading(false)
            _setResp(data)
        } catch (err) {
            _setErr(err)
            _setLoading(false)
            console.log(err)
        }
    }

    return <HomeProvider value={{ request: _request, setRequest: _saveRequest, sendRequest: _sendRequest, loading: _loading }}>
        <Request />
        <Data resp={_resp} />
        <Err err={_err} />
    </HomeProvider>
}

export default Home