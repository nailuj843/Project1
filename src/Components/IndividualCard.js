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
    
    
    // cardId: "BT_020e"
    // cardSet: "Ashes of Outland"
    // dbfId: "57473"
    // locale: "enUS"
    // name: "Aldor Attendant"
    // playerClass: "Neutral"
    // text: "Reduced Cost."
    // type: "Enchantment"

    // cardId: "EX1_625t2"
    // cardSet: "Classic"
    // cost: 2

    // dbfId: "1623"
    // img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/97cd9acfd86835c9619883020a572329a7c88b3fb3037a4ca98882f56086064b.png"

    // locale: "enUS"
    // name: "Mind Shatter"
    // playerClass: "Priest"

    // text: "<b>Hero Power</b>\\nDeal $3 damage."
    // type: "Hero Power"


    ///////////////////////////////
    //     artist: "Raymond Swanland"
    // attack: 1
    // cardId: "EX1_102"
    // cardSet: "Classic"
    // collectible: true
    // cost: 3
    // dbfId: "979"
    // faction: "Neutral"
    // flavor: "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount."
    // health: 4
    // img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/db7aa34da5966635ad856ac8cf732b30430cf414297e24cf87d6a923f8660442.png"
    // imgGold: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e6f5b100d40a21a2ba03d1ad840ee733f514f4e4db3bfa3db7b902d23deaba2b.png"
    // locale: "enUS"
    // name: "Demolisher"
    // playerClass: "Neutral"
    // race: "Mech"
    // rarity: "Rare"
    // text: "At the start of your turn, deal 2 damage to a random enemy."
    // type: "Minion"

    return (


        <div>
            <br></br>
            <br></br>

            This is the IndividualCard page <br></br>
            {card.name}

            <br></br>

            <img src={card.img} alt={card.name} height="600vh"></img>
            {card.imgGold ?   <img src={card.imgGold} alt={card.name} height="600vh"></img> : <></> }
        </div>

    )
}

export default IndividualCard