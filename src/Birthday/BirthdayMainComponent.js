import React from 'react'
import CardList from './BirthdayCardsList';
import { birthday } from './birthday'

const Birthday = () => {
    
        return (
            <div>
            <CardList birthday={birthday} className="CardList"/>
            </div>
        );
    
}

export default Birthday;