import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.contact.id}?set=set2&size=180x180`}/>
        <h3> {props.contact.name} </h3>
        <p> {props.contact.email} </p>
    </div>
)