import React from 'react'

const Err = props => {
    const { err } = props

    return !!err && <div className="max-w rounded overflow-hidden shadow-lg border border-8 border-blue-500 p-3 mb-4 text-red-500">
        {err}
        <br />
        Open Developer Tools for more informations.
    </div>
}

export default Err