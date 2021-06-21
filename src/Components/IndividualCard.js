import { useContext } from "react"
// import { useEffect } from "react"
// import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'

const IndividualCard = () => {
    const {card} = useContext(AppContext)
    
    if(!card){
        window.location.href = 'http://localhost:3000'
    }
     console.log(card)
     window.scrollTo(0, 0);
    
    
    console.log(card)

    function checkForValue(value){
        console.log(value)
        console.log(card[value])
        if(card[value] !== undefined){
            return(
                <div> {value.toUpperCase()} : {card[value]}  <br/></div>
            )
        }else{
            return <></>
        }
    }

    return (


        <div >
            <br/><br/>
            <br/><br/>

            <div className = 'customFont'>
            {/* {checkForValue('name')}  */}
            {checkForValue('flavor')} 
            {/* Flavor Text: {card.flavor} <br/> */}
            {checkForValue('spellSchool')} 
            {/* School: {card.spellSchool} <br/> */}
            {checkForValue('playerClass')}
            {/* Class: {card.playerClass} <br/> */}
            {checkForValue('rarity')} 
            {/* Rarity: {card.rarity} <br/> */}
            Type: {card.type} <br/>
            Set: {card.cardSet} <br/>
            </div>

            <div className = 'imgBox'>

                <img  src={card.img} alt={card.name} height = '600vh'></img>
                {card.imgGold ?   <img src={card.imgGold} alt={card.name} height="600vh"></img> : <></> }

            </div>
        </div>

    )
}

export default IndividualCard