import React from 'react';
import Text from './Text';

const info = {
  title: "Card Title",
  imgSrc: "hello.png",
  width: "50px"
}

const InfoCard = (props) => {
  return (
    <div className={props.class} style={{width:props.width}}>
      <h3>{info.title}</h3>
      <img src={info.imgSrc} style={{width:info.width}}></img>
      <Text class="card-text"/>
    </div>
  )
};

export default InfoCard
