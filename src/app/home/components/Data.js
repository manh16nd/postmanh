import React from 'react'
import JSONPretty from 'react-json-prettify'
import { atomOneLight } from 'react-json-prettify/dist/themes'

const customTheme = {
    ...atomOneLight,
    background: '#4a5568',
    brace: '#fff',
    keyQuotes: 'rgb(129, 211, 204)',
    valueQuotes: 'rgb(129, 211, 204)',
    colon: '#fff',
    comma: '#fff',
    key: '#4299e1',
    value: {
        string: '#f7fafc',
        null: '#f56565',
        number: '#f6e05e',
        boolean: '#81e6d9',
    },
    bracket: '#fff',
}

const Data = props => {
    const { resp } = props

    return !!resp && <div className="max-w rounded overflow-hidden shadow-lg border border-8 border-blue-500 p-3 mb-4 text-white">
        <JSONPretty json={resp} theme={customTheme} />
    </div>
}

export default Data