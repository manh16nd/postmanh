import React from 'react'

const Button = props => {
    const { children, fullWidth, className, quited, danger, ...buttonProps } = props

    const bg = quited ? 'bg-grey-500 hover:bg-blue-700' :
        danger ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'

    return <button
        className={`${bg} text-white font-bold py-2 px-4 rounded ${!!fullWidth && 'w-full'} ${className}`}
        {...buttonProps}
    >
        {children}
    </button>
}

export default Button