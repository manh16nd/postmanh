import React, { useContext } from 'react'
import HomeContext from '../context/HomeContext'

const Request = props => {
    const { request, setRequest } = useContext(HomeContext)

    return <div className="max-w rounded overflow-hidden shadow-lg border border-8 border-teal-500 p-3">
        <div className="text-teal-500 font-bold">
            Request
        </div>
    </div>
}

export default Request