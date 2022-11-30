import React from "react";


function Cards(props){
    return(
        <>
    <div className="Cards">
        <div className="Card">
        <img src={props.card_image} alt="" className="Image"/>
        <br />
        <span className="Card_category">{props.category}</span>
        <br />
        <h3 className="Card-title">{props.title}</h3>
        <br />
        <a href={props.link} className="link" target="_blank">see more</a>
        </div>
    </div>
        </>
    ); 
}
export default Cards;