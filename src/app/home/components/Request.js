import React, { useContext, useState } from 'react'
import HomeContext from '../context/HomeContext'
import Select from '../../shared/components/Select'
import methods from '../static/method'
import Input from '../../shared/components/Input'
import Button from '../../shared/components/Button'
import RequestMenu from './RequestMenu'

const Request = props => {
    const { request, setRequest, sendRequest } = useContext(HomeContext)
    const [_tab, _setTab] = useState(0)

    const onChange = key => value => setRequest({ [key]: value })

    const _changeTab = value => () => _setTab(value)

    return <div className="max-w rounded overflow-hidden shadow-lg border border-8 border-blue-500 p-3 mb-4">
        <div className="text-blue-500 font-bold mb-4">
            Request
        </div>
        <div className="flex mb-3">
            <div className="w-full sm:w-full lg:w-1/5 pr-2">
                <Select id="request_method" label="Method" value={request.method} options={methods} onChange={onChange('method')} />
            </div>
            <div className="w-full sm:w-full lg:w-1/5 pr-2">
                <Input id="request_url" label="URL" value={request.url} onChange={onChange('url')} />
            </div>
            <div className="w-full sm:w-full lg:w-1/5 pr-2">
                <Input id="request_path" label="Path" value={request.path} onChange={onChange('path')} />
            </div>
            <div className="w-full sm:w-full lg:w-1/5 pr-2">
                <Input id="request_path" label="Label" value={request.label} onChange={onChange('label')} placeholder="(Optional)" />
            </div>
            <div className="w-full sm:w-full md:w-1/5 flex items-end">
                <Button
                    fullWidth
                    className="py-2 border border-blue-500 font-bold"
                    onClick={sendRequest}
                >
                    Send
                </Button>
            </div>
        </div>
        <div className="flex">
            <div className="w-1/2 sm:w-1/2 md:w-1/5 flex items-end pr-2">
                <Button fullWidth onClick={_changeTab(0)} quited={_tab !== 0}>
                    Params
                </Button>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/5 flex items-end pr-2">
                <Button fullWidth onClick={_changeTab(1)} quited={_tab !== 1}>
                    Body
                </Button>
            </div>
        </div>
        <RequestMenu menu={_tab} />
    </div>
}

export default Request