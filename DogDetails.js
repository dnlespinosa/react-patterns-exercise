import React from 'react';
import { useParams } from 'react-router-dom'


const DogDetails = ({ array }) => {

    const { namez } = useParams();
    console.log(array.props.dogs[0].name)
    let obj={}
    for (let i=0; i< array.props.dogs.length; i++) {
        if (namez === array.props.dogs[i].name) {
            obj['name']=array.props.dogs[i].name
            obj['age']=array.props.dogs[i].age
            obj['facts']=array.props.dogs[i].facts
        }
    }


    return (
        <div>
            <h1>Name: {obj.name}</h1>
            <h1>Age: {obj.age} </h1>
            {/* {obj['facts'].map(item  => {
                <h1>{item}</h1>
            })} */}
        </div>
    )
}

export default DogDetails 