import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ symbol }) => {
    const navigate = useNavigate();

    return (
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{symbol}</h2>
        </div>
        <button className="card__btn" onClick={() => navigate(`/stocks/:${symbol}`, { state: symbol})}>View Details</button>
      </div>
    );
}

export default Card;