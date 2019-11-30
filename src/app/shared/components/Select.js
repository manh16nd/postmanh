import React from 'react'

const Select = props => {
    const { options, value, label, id } = props

    const onChange = e => props.onChange(e.target.value)

    return <div>
        {!!label && <label className="text-blue-500 block" htmlFor={id}>{label}</label>}
        <select
            value={value}
            onChange={onChange}
            id={id}
            className="block text-white appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
        >
            {options.map(({ text, value: option }, i) => <option key={i} value={option}>
                {text}
            </option>)}
        </select>
    </div>
}

export default Select