import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'
import SearchBarImage from '../Logos/SearchBar.png'
import ManaSelection from '../Logos/ManaSelection.png'
import ManaSelectionMouseOver from '../Logos/ManaSelectionMouseOver.png'
import ManaSelectionClick from '../Logos/ManaSelectionClick.png'
import { useEffect } from "react"


const Search = () => {
    
    const {searchResults, setSearchResults} = useContext(AppContext) 
    const {data} = useContext(AppContext)
    const {setCard} = useContext(AppContext)
    const {manaFilter, setManaFilter} = useContext(AppContext)
    const {xPos, setxPos} = useContext(AppContext)
    const {yPos, setyPos} = useContext(AppContext)
 //   const {cardCollection, setCardCollection} = useContext(AppContext)
    if(!data){
        window.location.href = 'http://localhost:3000'
    }
    // let cardCollection = []

    //  tried to have the card collection only be calculated once

    //const resetFilter = () => {
        let keys = Object.keys(data).sort()
        keys = keys.filter(key => data[key].length > 0 )

        // make a giant list of cards, (split everything out from the default categories)
        let cardCollection = []

        for(let x=0; x<keys.length; x++){
            // console.log(data[keys[x]])
            cardCollection = cardCollection.concat(data[keys[x]])
            // console.log(cardCollection)
        }

        // filter out only entries that have an image
        cardCollection = cardCollection.filter(card => card.img)
        
        // console.log(cardCollection)
        // setCardCollection(resetCollection)
    //}

    function Search(searchValue){
        let localSearchResults = []
        
        // useEffect( resetFilter, [] )

      //  useEffect(resetFilter, [] )
            
        
        let key = ''
        // cost=3
        // handles the '=' ... whatever is left of '=' is key
        // start=d .... start  name.search === 0, so only if the first letter matches

        
        let optionIndex = document.getElementById('filter').selectedIndex
        key = document.getElementsByTagName("option")[optionIndex].value;
        // console.log(key)

        if (searchValue.search('=') !== -1) {
            key = searchValue.substring(0, searchValue.search('='))
            searchValue = searchValue.substring(searchValue.search('=') + 1, searchValue.length)
            // console.log(key)
            // console.log(searchValue)
        }

        // jsut want to search for the first letter that matches
        // if key=start

        if(key === 'start'){
            cardCollection.forEach(card => {
                if(card.name.search(new RegExp(searchValue, "i")) ===  0)  {
                    // card name was found, add it to the localSearchResults
                    localSearchResults.push(card)
                }
            })
        }

        if(key === 'cost'){

            searchValue = parseInt(searchValue)

            if(searchValue === 'NaN'){
                alert('Please enter a valid number')
                return
            }

            cardCollection.forEach(card => {
                if(card.cost ===  searchValue)  {
                    // card name was found, add it to the localSearchResults
                    localSearchResults.push(card)
                }
            })
        }

        if(key === 'type'){
            cardCollection.forEach(card => {

                
                    if(card.type.search(new RegExp(searchValue, "i")) !== -1 )  {
                        // card name was found, add it to the localSearchResults
                        localSearchResults.push(card)
                    }
                

                
            })
        }
        

        if(key === 'rarity'){
            cardCollection.forEach(card => {

                if(card.rarity){

                
                if(card.rarity.search(new RegExp(searchValue, "i")) !== -1 )  {
                    // card name was found, add it to the localSearchResults
                    localSearchResults.push(card)
                }
            }
            })
        }

        if(key === 'health'){

            searchValue = parseInt(searchValue)

            if(searchValue === 'NaN'){
                alert('Please enter a valid number')
                return
            }

            cardCollection.forEach(card => {
                if(card.health ===  searchValue)  {
                    // card name was found, add it to the localSearchResults
                    localSearchResults.push(card)
                }
            })
        }

        if(key === 'name'){
            cardCollection.forEach(card => {

                if(card.name.search(new RegExp(searchValue, "i")) !== -1 )  {
                    // card name was found, add it to the localSearchResults
                    localSearchResults.push(card)
                }
            })
        }


        // console.log(localSearchResults)
        
        // sort the array alphabetically
        let filteredResults = localSearchResults.sort(function(a, b)
        {
            var x = a.name; var y = b.name;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });


        setSearchResults(filteredResults)

    }

    function UpdateCard(newCard) {
        setCard(newCard)
    
    }

    function HandleKeyPress(event){
        // console.log(event.code)
        
        if(event.code === 'Enter' || event.code === 'NumpadEnter'){
            Search( document.getElementById("textbox").value )
        }
    }
    
    function HandleChange(event){
        // console.log('you made a change' + event.target.value)
    }

    function ManaMouseEnter(){
        setManaFilter(ManaSelectionMouseOver)
    }

    function ManaLeave(){
        setManaFilter(ManaSelection)
    }

    function ManaClick(){
        setManaFilter(ManaSelectionClick)

        switch(true){
            case (xPos < 65):
                console.log(0)
                break
            case (xPos>=65 && xPos < 120):
                console.log(1)
                break
            case (xPos>=120 && xPos < 175):
                console.log(2)
                break
            case (xPos>=175 && xPos < 230):
                console.log(3)
                break
            case (xPos>=230 && xPos < 285):
                console.log(4)
                break
            case (xPos>=285 && xPos < 340):
                console.log(5)
                break
            case (xPos>=340 && xPos < 395):
                console.log(6)
                break
            case (xPos>=395 && xPos < 450):
                console.log(7)
                break
            case (xPos>=450 && xPos < 505):
                console.log(8)
                break
            case (xPos>=505 && xPos < 560):
                console.log(9)
                break
            case (xPos>=560 ):
                console.log(10)
                break
            default:
                break;
        }

        
    }

    function MouseMove(e){
        // console.log(e.nativeEvent.offsetX)
        // console.log(e.pageY)

        setxPos(e.nativeEvent.offsetX)
        setyPos(e.nativeEvent.offsetY)
    }

    return (
        <div >
            <br></br>
            <br></br>
            <br></br>

            <div className="centered">
                {/* This is the Search page <br></br><br></br>

                To search for a specific key word, search 'KEY=value' <br/><br/>
                ex: type=minion , cost=3 , start=a <br/><br/> */}

                <input type="image" src="https://searchstone.io/img/searchstone.svg" width="400px" onClick={() => Search( document.getElementById("textbox").value )}  ></input>
                
                <br/><br/>

                <img src={manaFilter} onMouseLeave={ManaLeave} onMouseEnter={ManaMouseEnter} onMouseDown={ManaClick} onMouseUp={ManaMouseEnter} onMouseMove={(e) => MouseMove(e)} ></img>
                <br/><br/>
                X : {xPos}
                <br/><br/>
                Y : {yPos}
                <br/><br/>
                
                <div className='searchBar'  >
                    
                    <input id="textbox" type="text" placeholder='Search' onKeyDown={(e) => HandleKeyPress(e)}></input>
                    <img src={SearchBarImage}></img>
                    
                </div>
                
                <br/><br/>

                <label for="filter"  >Choose a Filter:</label>
                <select name="filter" id="filter" className='customListBox' onChange ={HandleChange}>
                    <option value="type" >Type</option>
                    <option value="cost">Cost</option>
                    <option value="rarity">Rarity</option>
                    <option value="name">Name</option>
                    <option value="start">Starts With...</option>
                    <option value="health">Health</option>
                </select>

                <br></br>

                {/* <input id="textbox" type="text" className="customInput" placeholder='Search' onKeyDown={(e) => HandleKeyPress(e)} ></input>  */}
                {/* <button onClick={Search} className='customButton' >Search</button> <br></br> */}

                {/* // document.getElementById("searchTxt").value; */}

                {/* <input type="image" src="https://searchstone.io/img/searchstone.svg" width="400px" onClick={() => Search( document.getElementById("textbox").value )}  ></input> */}
                {/* have an onClick  'Search' handler that would call to a function in this Component */}
            </div>

            <div className='cardBox'>
                {searchResults.map  (card => <Link className='customLink' to="/IndividualCard" onClick={() => UpdateCard(card)}>
                    <div className='column'>
                        {/* {card.name} <br></br> */}
                        
                        <img src={card.img} alt={card.name}  ></img>
                    </div>
                </Link> )}
            </div>
            
        </div>

    )
}

export default Search


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

    // first thing to do is just get a subset of the data, that is just card data

    // go through all cagegories to make sure they have cards in them
    // go through each category that has cards and filter, 'do they have img data'

    // loop over all of the cards and make comparisons to the search criteria
    // store all of those results in an array
    // display results