import React from 'react'

const Button = props => {
    const { children, fullWidth, className, ...buttonProps } = props

    return <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!!fullWidth && 'w-full'} ${className}`}
        {...buttonProps}
    >
        {children}
    </button>
}

export default Button