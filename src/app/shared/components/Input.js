import React from 'react'

const Input = props => {
    const { value, label, id, onChange, textarea, ...inputProps } = props

    const _onChange = e => {
        console.log(inputProps.type === 'file')
        onChange(inputProps.type === 'file' ? e.target.files : e.target.value)
    }

    return <div>
        {!!label && <label htmlFor={id} className="text-blue-500 block">
            {label}
        </label>}
        {textarea ? <textarea
            id={id}
            className="block h-64 text-white appearance-none bg-gray-700 border border-gray-400 shadow rounded w-full px-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500 focus:text-black"
            value={value || ''}
            onChange={_onChange}
            {...inputProps}
        /> : <input
                id={id}
                className="block text-white appearance-none bg-gray-700 border border-gray-400 shadow rounded w-full px-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500 focus:text-black"
                value={value || ''}
                onChange={_onChange}
                {...inputProps}
            />}
    </div>
}

export default Input