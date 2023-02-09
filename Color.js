import React from 'react'

import { Link, useParams } from 'react-router-dom'

const Color = () => {

    const color = useParams()

    return (
        <div style={{backgroundColor : {color}}}>
            <Link to="/colors">GO BACK</Link>
        </div>
    )
}

export default Color