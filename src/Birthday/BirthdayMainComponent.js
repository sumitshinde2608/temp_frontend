import React from 'react'
import CardList from './BirthdayCardsList';
import { birthday } from './birthday'

const Birthday = () => {
    
        return (
            <div
            style={{
                backgroundColor:'white',
                overflow : 'hidden',
                borderRadius:'25px'
            }}>
            <CardList birthday={birthday} className="CardList"/>
            </div>
        );
    
}

export default Birthday;