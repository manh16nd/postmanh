import React from 'react'
import RequestParams from './RequestParams'
import RequestBody from './RequestBody'
import Headers from './Headers'

const RequestMenu = props => {
    const { menu } = props

    const _renderMenu = () => {
        if (menu === 0) return <RequestParams />
        if (menu === 1) return <RequestBody />
        return <Headers />
    }

    return <div className="pt-3">
        {_renderMenu()}
    </div>
}

export default RequestMenu