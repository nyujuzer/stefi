import React from 'react';
import './card.css'; // You may want to create a corresponding CSS file for styling

interface INavBarProps{
    title:string,
    children:any
}

const Card = ({ title, children }:INavBarProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};



export default Card;