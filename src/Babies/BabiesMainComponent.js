import React from 'react'
import CardList from './BabiesCardsList';
import { babies } from './babies'

const Babies = () => {
    return (
        <div>
            <div>
            <CardList babies={babies} className="CardList"/>
            </div>
        </div>
    )
}

export default Babies;