import React from 'react';
import Cards from './BabiesCard';
// import robots from './robots';


const CardList = ({babies}) => {
    const CardsArray = babies.map((user,i) => {
        return <Cards key={i} id={babies[i].id} 
        name = { babies[i].name } 
        Bio = { babies[i].Bio }
        year = { babies[i].year}
        />
     })
    return (
        <div>
        {CardsArray}
        </div>
    );
}

export default CardList;

