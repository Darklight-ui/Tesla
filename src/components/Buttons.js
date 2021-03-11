import React from 'react'
import './Buttons.css'

const Buttons = ({imp, link, text}) => {
    return (
        <div className={`button ${imp == 'secondary' ? 'button_white' : ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Buttons
