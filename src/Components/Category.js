import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'

const Category = () => {
    
    const {category} = useContext(AppContext)
    const {data} = useContext(AppContext)
    const {setCard} = useContext(AppContext)
    const {toggleView, setToggleView} = useContext(AppContext)
    
    
    if(!data){
        window.location.href = 'http://localhost:3000'
    }
    
    // console.log(data[category])

    // data alot of categories
    // data[catagory] look at this data

    function UpdateCard(newCard) {
        setCard(newCard)
    
    }

    function HandleToggleViewClick() {
        setToggleView(!toggleView)
    }

    
    // cardId: "BT_020e"
    // cardSet: "Ashes of Outland"
    // dbfId: "57473"
    // locale: "enUS"
    // name: "Aldor Attendant"
    // playerClass: "Neutral"
    // text: "Reduced Cost."
    // type: "Enchantment"
    let filteredData = data[category].filter(card => card.img)
   // console.log(data[category].filter(card => card.img))

    return (
        <div>
            <br></br>
            <br></br>
            This is the Category page {category}
              <button onClick = {() => HandleToggleViewClick()} > Show All </button>  
            

            <div className='cardBox'>
                {filteredData.map(card => 
                    <Link className='customLink' to="/IndividualCard" onClick={() => UpdateCard(card)}>
                        <div className='column'>
                            {card.name} <br></br>
                            {/* <img src={card.img} ></img>  */}
                              { toggleView ? <img src={card.img} width="100px" alt={card.name} ></img> : <img src={card.img} alt={card.name}  ></img>}  
                        </div>
                    </Link> )}

            </div>
        </div>

    )
}

export default Category