import React from 'react';

const Title = (props) => {
    return (
      <div className={props.class}>
        <h1 style={{color:props.color}}>{props.text}</h1>
      </div>
    )
};

export default Title
