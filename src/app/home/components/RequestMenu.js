import React from 'react'
import RequestParams from './RequestParams'

const RequestMenu = props => {
    const { menu } = props

    const _renderMenu = () => {
        if (menu === 1) return <RequestParams />
        return null
    }

    return <div className="pt-3">
        {_renderMenu()}
    </div>
}

export default RequestMenu