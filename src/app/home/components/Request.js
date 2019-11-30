import React, { useContext } from 'react'
import HomeContext from '../context/HomeContext'
import Select from '../../shared/components/Select'
import methods from '../static/method'
import Input from '../../shared/components/Input'
import Button from '../../shared/components/Button'

const Request = props => {
    const { request, setRequest } = useContext(HomeContext)

    const onChange = key => value => setRequest({ [key]: value })

    return <div className="max-w rounded overflow-hidden shadow-lg border border-8 border-blue-500 p-3">
        <div className="text-blue-500 font-bold mb-4">
            Request
        </div>
        <div className="flex">
            <div className="w-full sm:w-full md:w-1/5 pr-2">
                <Select id="request_method" label="Method" value={request.method} options={methods} onChange={onChange('method')} />
            </div>
            <div className="w-full sm:w-full md:w-1/5 pr-2">
                <Input id="request_url" label="URL" value={request.url} onChange={onChange('url')} />
            </div>
            <div className="w-full sm:w-full md:w-1/5 pr-2">
                <Input id="request_path" label="Path" value={request.path} onChange={onChange('path')} />
            </div>
            <div className="w-full sm:w-full md:w-1/5 pr-2">
                <Input id="request_path" label="Label" value={request.label} onChange={onChange('label')} placeholder="(Optional)" />
            </div>
            <div className="w-full sm:w-full md:w-1/5 flex items-end">
                <Button fullWidth className="py-2 border border-blue-500 font-bold">
                    Send
                </Button>
            </div>
        </div>
    </div>
}

export default Request