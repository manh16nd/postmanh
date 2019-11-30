import React from 'react'

const Header = props => {

    return <nav className="flex items-center justify-between flex-wrap p-6 font-display">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={'/postmanh.svg'} alt="Logo" className="w-10 mr-2" />
            <span className="font-semibold text-xl tracking-tight">Postmanh</span>
        </div>
    </nav>
}

export default Header