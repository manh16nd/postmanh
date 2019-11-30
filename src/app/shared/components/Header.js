import React from 'react'

const Header = props => {

    return <nav className="flex items-center justify-between flex-wrap p-6 font-display">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={'/postmanh.svg'} alt="Logo" className="w-10 mr-2" />
            <span className="font-semibold text-xl tracking-tight">Postmanh</span>
        </div>
        <a href="https://github.com/manh16nd/postmanh" target="_blank" rel="noopener noreferrer">
            <img src={'/github.png'} alt="Github" className="w-10" />
        </a>
    </nav>
}

export default Header