import React, { useState, useContext } from 'react'
import Button from '../../shared/components/Button'
import Input from '../../shared/components/Input'
import HomeContext from '../context/HomeContext'

const defaultItem = { key: '', value: '' }

const RequestBody = props => {
    const { setRequest } = useContext(HomeContext)

    const [_params, _setParams] = useState([defaultItem])

    const _addMore = () => _setParams([..._params, defaultItem])

    const _setBody = body => {
        const newBody = body.reduce((result, { key, value }) => ({
            ...result,
            [key]: value
        }), {})

        setRequest({data: newBody})
    }

    const _onChange = (i, key) => value => {
        const newParams = _params.map((item, j) => {
            if (i === j) return { ...item, [key]: value }
            return item
        })
        _setBody(newParams)
        _setParams(newParams)
    }

    const _clickRemove = i => () => {
        const newParams = _params.filter((value, j) => i !== j)
        _setBody(newParams)
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
                Add more
            </Button>
        </div>
    </div>
}

export default RequestBody