import React from 'react'
import CardList from './BabiesCardsList';
import { babies } from './babies'

const Babies = () => {
    return (
        <div>
            <div
            style={{
                backgroundColor:'white',
                overflow : 'hidden',
                borderRadius:'25px'
            }}>
            <CardList babies={babies} className="CardList"/>
            </div>
        </div>
    )
}

export default Babies;