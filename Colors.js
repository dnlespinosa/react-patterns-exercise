import React, { useState } from 'react'

import ColorForm from './ColorForm'
import { Link } from 'react-router-dom'

const Colors = ({ colors }) => {
    return (
        <>
            <h1>Welcome to the color factory</h1>
            <Link to="/colors/new">ADD A COLOR</Link>
            <p>Pick a Color any Color</p>
            {colors.map(color => {
                <Link to={`/colors/${color}`}>{color}</Link>
            })}
        </>
    )
}

export default Colors