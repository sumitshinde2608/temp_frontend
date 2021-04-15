import React from 'react'
import CardList from './AnniversariesCardsList';
import { anniversaries } from './anniversaries'

const Anniversaries = () => {
    return (
        <div>
            <div style={{
                backgroundColor:'white',
                overflow : 'hidden',
                borderRadius:'25px'
            }}>
            <CardList anniversaries={anniversaries} className="CardList"/>
            </div>
        </div>
    )
}

export default Anniversaries;