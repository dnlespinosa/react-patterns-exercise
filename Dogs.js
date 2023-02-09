import React from 'react';
import { Link } from "react-router-dom";

const Dogs = ({ array }) => {
    // console.log(array.props.dogs)
    let arr = array.props.dogs

    arr.map(obj => {
        console.log(obj.name)
    })


    return (
        <>
            <h1>
                This is dog List
            </h1>
            <ul>
                {arr.map(obj => {
                    
                    <li><Link to='/dogs/:name'>{obj.name}</Link></li>
                  
                })}
            </ul>
        </>
    )

}

export default Dogs 