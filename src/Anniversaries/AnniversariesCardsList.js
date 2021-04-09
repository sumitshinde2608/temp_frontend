import React from 'react';
import Cards from './AnniversariesCard';
// import robots from './robots';


const CardList = ({anniversaries}) => {
    const CardsArray = anniversaries.map((user,i) => {
        return <Cards key={i} id={anniversaries[i].id} 
        name = { anniversaries[i].name } 
        Bio = { anniversaries[i].Bio }
        year = { anniversaries[i].year}
        />
     })
    return (
        <div>
        {CardsArray}
        </div>
    );
}

export default CardList;

