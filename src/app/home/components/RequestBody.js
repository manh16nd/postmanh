import React, { useState, useContext } from 'react'
import Button from '../../shared/components/Button'
import Input from '../../shared/components/Input'
import Select from '../../shared/components/Select'
import HomeContext from '../context/HomeContext'
import dataTypes from '../static/dataTypes'
import formDataTypes, { text, file } from '../static/formDataTypes'

const defaultItem = { key: '', value: '', type: text }

const RequestBody = props => {
    const { setRequest } = useContext(HomeContext)

    const [_dataType, _setDataType] = useState('json')
    const [_params, _setParams] = useState([defaultItem])
    const [_formData, _setFormData] = useState([defaultItem])
    const [_json, _setJson] = useState('')

    const _addMore = () => {
        if (_dataType === 'formdata') return _setFormData([..._formData, defaultItem])
        _setParams([..._params, defaultItem])
    }

    const _setBody = body => {
        if (_dataType === 'json') return setRequest({ data: body })

        const newBody = body.reduce((result, { key, value }) => ({
            ...result,
            [key]: value
        }), {})

        setRequest({ data: newBody })
    }

    const _onChange = (i, key, formData) => value => {
        const data = formData ? _formData : _params
        const changeFunc = formData ? _setFormData : _setParams

        const newParams = data.map((item, j) => {
            if (i !== j) return item
            if (key === 'type') return { ...item, [key]: value, value: null }
            if (key === 'key') return { ...item, [key]: value }
            if (item.type === file) return { ...item, [key]: value[0] }
            return { ...item, [key]: value }
        })
        _setBody(newParams)
        changeFunc(newParams)
    }

    const _clickRemove = (i, key) => () => {
        const data = key === `data` ? _params : _formData
        const changeFunc = key === `data` ? _setBody : _setFormData
        const newParams = data.filter((value, j) => i !== j)
        changeFunc(newParams)
        _setParams(newParams)
    }

    const _onChangeDataType = type => {
        _setDataType(type)
        setRequest({
            type,
            body: null,
        })
    }

    const _onChangeJson = value => {
        _setJson(value)
        _setBody(value)
    }

    const _onKeyDownJson = e => {
        if (e.keyCode !== 9) return

        e.preventDefault()
        _setJson(_json + '    ')
    }

    const _renderFormData = () => _formData.map(({ key, value, type }, i) => <div className="flex" key={i}>
        <div className="w-full lg:w-4/12 mr-2">
            <Input label="Key" value={key} onChange={_onChange(i, 'key', true)} id={`key_${i}`} />
        </div>
        <div className="w-full lg:w-4/12 mr-2">
            <Input label={type === file && value ? `File: ${value.name}` : "Value"} type={type} value={type === file && value ? '' : value || ''} onChange={_onChange(i, 'value', true)} id={`value_${i}`} />
        </div>
        <div className="w-full lg:w-2/12 mr-2">
            <Select label="Type" value={type} onChange={_onChange(i, 'type', true)} id={`type${i}`} options={formDataTypes} />
        </div>
        <div className="w-full lg:w-2/12 flex items-end">
            <Button className="border border-red-500" danger
                onClick={_clickRemove(i, 'formdata')}
            >
                Remove
        </Button>
        </div>
    </div>)

    const _renderUrlEncoced = () => _params.map(({ key, value }, i) => <div className="flex" key={i}>
        <div className="w-full lg:w-4/12 mr-2">
            <Input label="Key" value={key} onChange={_onChange(i, 'key')} id={`key_${i}`} />
        </div>
        <div className="w-full lg:w-4/12 mr-2">
            <Input label="Value" value={value} onChange={_onChange(i, 'value')} id={`value_${i}`} />
        </div>
        <div className="w-full lg:w-4/12 flex items-end">
            <Button className="border border-red-500" danger
                onClick={_clickRemove(i, 'data')}
            >
                Remove
        </Button>
        </div>
    </div>)

    const _renderJson = () => <Input
        textarea
        value={_json}
        onChange={_onChangeJson}
        onKeyDown={_onKeyDownJson}
        id="json-data"
    />

    const _renderData = () => {
        const switchCases = {
            'x-www-form-urlencoded': _renderUrlEncoced,
            'json': _renderJson,
            'formdata': _renderFormData,
        }

        return switchCases[_dataType] ? switchCases[_dataType]() : null
    }

    return <div>
        <div className="font-mono">
            {_renderData()}
        </div>
        <div className="flex justify-end items-end">
            <Select value={_dataType} label="Body type" id="data_type" options={dataTypes} onChange={_onChangeDataType} />
            {_dataType !== 'json' && <Button onClick={_addMore} className="border border-blue-500 ml-3">
                Add more body
            </Button>}
        </div>
    </div>
}

export default RequestBody