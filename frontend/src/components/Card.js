import React from 'react'

const Card = ({ plant }) => {
    console.log('tha plant in Card.js', plant);
    return (
        <div>
            {plant.plantName}
            <img src={"http://localhost:5000" + plant.photo}/* thumbnail */ /* alt='a monstera plant' *//>
        </div>
    )
}

export default Card
