import React from 'react';
import Cards from './BirthdayCard';
// import robots from './robots';


const CardList = ({birthday}) => {
    const CardsArray = birthday.map((user,i) => {
        return <Cards key={i} id={birthday[i].id} 
        name = { birthday[i].name } 
        Bio = { birthday[i].Bio }
        year = { birthday[i].year}
        />
     })
    return (
        <div>
        {CardsArray}
        </div>
    );
}

export default CardList;

