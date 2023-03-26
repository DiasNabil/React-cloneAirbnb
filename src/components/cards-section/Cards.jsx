import React from 'react'
import './Cards.css'
import star from '../../assets/Star.svg'

export default function Cards(props){

    let badge
    if(props.openSpots === 0){
        badge = 'SOLD OUT'
    }else if(props.location === 'Online'){
        badge = 'ONLINE'
    }
    
    return (
        <div className="card">
            <div className="card-img-section">
                <img className='card-photo' src={`/src/assets/${props.coverImg}`} alt="" />
                {badge ? <div className="dispo">{badge}</div> : undefined}
            </div>
            <div className="card-info">
                <div className="rating">
                    <img className='stars' src={star} alt="" />
                    {props.stats.rating} <span className='grey'>({props.stats.reviewCount}) - {props.location}</span>
                </div>
                <p className="desc">{props.title}</p>
                <p className="pricing"><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}