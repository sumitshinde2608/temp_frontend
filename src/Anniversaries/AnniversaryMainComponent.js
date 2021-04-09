import React from 'react'
import CardList from './AnniversariesCardsList';
import { anniversaries } from './anniversaries'

const Anniversaries = () => {
    return (
        <div>
            <div>
            <CardList anniversaries={anniversaries} className="CardList"/>
            </div>
        </div>
    )
}

export default Anniversaries;