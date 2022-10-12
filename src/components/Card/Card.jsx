import './Card.css'
import React, {useContext, useState} from 'react'


const Card = ({card}) => {

    const [cards, setCards] =useState();
    const eliminarCard=(id)=>{        
        const listafiltrada=cards.filter((card)=>card.id !==id);
        setCards(listafiltrada);
        }
    return(    
        <div className='conteiner'>                    
        <div className="tarjeta card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">PRONVICIA: {card.provincia}</h5>
            <p className="card-text">Id : {card.id}</p>            
            <p className="card-text">Continente : {card.continente}</p>
            <p className="card-text">País : {card.pais}</p>
            <p className="card-text">Latitud : {card.latitud}</p>
            <p className="card-text">Longitud : {card.longitud}</p>
            <p className="card-text">Temperatura : {card.temperatura}</p>
            <p className="card-text">Velocidad Viento : {card.velocidadViento}</p>            
            <button className="btn btn-dark"
            onClick={
                ()=>{
                    eliminarCard(card.id)
                }
                }  > 
                Eliminar
            </button>
        </div>    
        </div>
        </div>

    );
}

export default Card