import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

const routes = [
    { path: '/', value: '', title: 'Homepage' },
]

const Sidebar = props => {
    const { pathname } = useLocation()
    const currentPathname = pathname.split('/')[1] || ''

    return <div className="h-full rounded border border-blue-500 shadow flex p-3 flex-wrap">
        {routes.map(route => <div
            key={route.path}
            className={classNames(
                currentPathname === route.value ? 'text-blue-500' : 'text-white',
                "transition-all rounded text-6xl flex justify-center items-center h-20 w-full hover:bg-white hover:text-blue-500")}
        >
            <i className="icofont-space-shuttle" />
        </div>)}
    </div>
}

export default Sidebar