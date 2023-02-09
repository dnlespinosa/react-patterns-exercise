import React, { useState } from 'react'
import { Redirect, Switch } from 'react-router-dom'

const ColorForm = ({ addColor }) => {
    const INTIALSTATE = [{
        name:''
    }]
    const [formData, setFormData] = useState(INTIALSTATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(formData.name)
        setFormData(INTIALSTATE)
    }

    return (
        <div>
            <h1>ENTER YOUR COLOR</h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor='color'>Add A Color</label>
                <input type='text' 
                id='color'
                name='color' 
                placeholder='Add your color here' 
                value={formData.name}
                onChange={handleChange}/>
                <button onClick={(<Redirect to='/' />)}>Add color</button>
            </form>
        </div>
    )
}

export default ColorForm