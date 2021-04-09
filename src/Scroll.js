import React from 'react';

const Scroll = (props) =>{
    return (
    <div clasName= "scroller" style={
        {overflowY : 'scroll', 
        border : '4px solid black', 
        width : '30rem', 
        height: '100vh',
        }}>
        
        
        
        
        {props.children};
    </div>
    );
}

export default Scroll;