import React, { useState, useContext } from 'react'
import Button from '../../shared/components/Button'
import Input from '../../shared/components/Input'
import HomeContext from '../context/HomeContext'

const defaultItem = { key: '', value: '' }

const RequestParams = props => {
    const { setRequest, request } = useContext(HomeContext)

    const [_params, _setParams] = useState([defaultItem])

    const _addMore = () => _setParams([..._params, defaultItem])

    const _setQueryString = params => {
        const qs = params.map(({ key, value }) => `${key}=${value}`).join('&')
        const { path } = request
        const startQuery = path.indexOf('?')
        const newPath = startQuery >= 0 ? path.substring(0, path.indexOf('?')) : path
        setRequest({ path: `${newPath}${params.length && `?${qs}`}` })
    }

    const _onChange = (i, key) => value => {
        const newParams = _params.map((item, j) => {
            if (i === j) return { ...item, [key]: value }
            return item
        })
        _setQueryString(newParams)
        _setParams(newParams)
    }

    const _clickRemove = i => () => {
        const newParams = _params.filter((value, j) => i !== j)
        _setQueryString(newParams)
        _setParams(newParams)
    }

    return <div>
        {_params.map(({ key, value }, i) => <div className="flex" key={i}>
            <div className="w-1/3 mr-2">
                <Input label="Key" value={key} onChange={_onChange(i, 'key')} id={`key_${i}`} />
            </div>
            <div className="w-1/3 mr-2">
                <Input label="Value" value={value} onChange={_onChange(i, 'value')} id={`value_${i}`} />
            </div>
            <div className="w-1/3 flex items-end">
                <Button className="border border-red-500" danger
                    onClick={_clickRemove(i)}
                >
                    Remove
                </Button>
            </div>
        </div>)}
        <div className="flex justify-end">
            <Button onClick={_addMore}>
                Add more params
            </Button>
        </div>
    </div>
}

export default RequestParams