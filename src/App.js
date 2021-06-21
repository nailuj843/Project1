import NavBar from './Components/NavBar';
import Home from './Components/Home';
import List from './Components/List';
import Search from './Components/Search';
import Category from './Components/Category';
import IndividualCard from './Components/IndividualCard';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect} from 'react'
import AppContext from './Context/AppContext';
import AshesofOutland from './Logos/AshesofOutland.png'
import ManaSelection from './Logos/ManaSelection.png'

// let images = { 'AshesofOutland': AshesofOutland }

let images = {  "Ashes of Outland"              : AshesofOutland,
                "Battlegrounds"                 : "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blte99cbce665b4519e/5d9792194b2fde4e16784429/Hearthstone_Battlegrounds_Web_EN.png",
                "Blackrock Mountain"            : "https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/blackrock-mountain/en-us/logo-55a226332a2c5a17ce701b674f31f03c73aeec5a9f792d16a341ccaac65fec32dd937f3ad9175150c4be861f8df4e41798616409a27cc4c3c2d651ce29d0375b.png",
                "Classic"                       : "https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png",
                'Core'                          : 'https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png',
                'Demon Hunter Initiate'         : 'https://d.newsweek.com/en/full/1574165/hearthstone-year-phoenix-demon-hunter.png?w=1600&h=1600&q=88&f=01bfd0743698a27310f4cc6229d09f8d',
                'Descent of Dragons'            : 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt7c6375632ebe757b/5e20e3d0e796ce423f4a1528/logo.png',
                'Forged in the Barrens'         : 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt6ee524cce79151a5/5ff617ff1b201f131737e1b9/logo_forged-in-the-barrens_en-us.png',
                "Galakrond's Awakening"         : 'https://media.hearthpwn.com/attachments/99/384/ga-logosmall.png',
                'Goblins vs Gnomes'             : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/goblins-vs-gnomes/en-us/logo-2b29efcbf7e3da8e621a1bb85d38175b5b962075c1a87f26c235e4e1cbaf247661bc22760a927a493c97d65513fdef77f98f1311e3d8f074c55dcb05c914256a.png',
                'Hall of Fame'                  : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f1de426-6c68-45b1-b736-6130c7f22667/d82p3hm-41a45317-a6f6-4322-9b3a-269c42dbbc55.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMWRlNDI2LTZjNjgtNDViMS1iNzM2LTYxMzBjN2YyMjY2N1wvZDgycDNobS00MWE0NTMxNy1hNmY2LTQzMjItOWIzYS0yNjljNDJkYmJjNTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-sHH6tcB5IRocfSjpnXqUhCqaPdvyOPSNMmJoqFVAt0',
                "Journey to Un'Goro"            : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/journey-to-ungoro/en-gb/logo-902d1ba1ef42ed7e9ac5b8e69d4e7bf3c29f4145b4cfebaf81f7efbb5e90e0b7a6e00e1743ea45ba7443182db31e7111d64de8bf6ab11341ff14c43c89771743.png',
                'Knights of the Frozen Throne'  : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/knights-of-the-frozen-throne/en-us/logo-6b49403e82fe3b8361facc1f742747610a0f5577350fbc58facf165d7d137fc4335614eee74a454f10e8baa059e0de504f6e396d284a1dd5f1af119af9c31b37.png',
                'Kobolds & Catacombs'           : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/kobolds-and-catacombs/en-us/logo-aac685d7f5455e0642e5d686f681b663a16ea973086bac5d228705a62851dcd2e00f8431741666c9106df8fb530e6afb1f852bdfdd3e03f1b88b448a5ddbbdb3.png',
                'Legacy'                        : 'https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png',
                'Madness At The Darkmoon Faire' : 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt47bd37aa51c5db7f/5f5ffcb2b24c984f27fbd23d/darkmoon-faire-en-us-logo.png',
                'Mean Streets of Gadgetzan'     : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/mean-streets-of-gadgetzan/en-us/logo-4a9244641f56977c0f11c7932e5b76f62218e95ba60fd9a8ad0c5a509be2bc15592cd13d9292b9fb2768b1813efaa641258c167e044e57dcebceb57d7ab75872.png',
                'Naxxramas'                     : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/naxxramas/en-us/logo-9e188b467d8d072475310a2dde00b06e1cda5728ec10657a17a73cb808061856359539d8780dd1babb05ce65ada26f7fc8d1f3d1a03045eed432761640b6cf51.png',
                'One Night in Karazhan'         : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/one-night-in-karazhan/en-us/logo-421501a5672b6372423ac21d65de0cf6442070cbd0135b853845bf9383a472ce09983fcd0ccc05c46091f4a83da96953e94f9c68aac381636fd7bbee11bb6724.png',
                "Rastakhan's Rumble"            : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/rastakhans-rumble/en-us/logo-a1dcd2a43578434a8afa3c660037c7b7586dde99869b76ae76926f45fb122121b548b27f8ab57c0d81d15a969fe498c619ec25170d316b52c54e9bff32931772.png',
                'Rise of Shadows'               : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/rise-of-shadows/en-us/logo-5d885980ea8502791b3e51705d700a20d03efad6fda4a4052bc44d98addcb052059df9efa87e5251ff8bec4ab28dbe4d45bb01c79a185e3a62c3f1acf755cacf.png',
                'Saviors of Uldum'              : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/saviors-of-uldum/en-gb/logo-a5c928ca1c87f427352e356f26f72c07d5b0651a8a07b751c9551c000cdb23fa1384f6ebf8fe5f6e8c62b85caaaee3ff70c7c4656186e46f48f826d74a89614f.png',
                'Scholomance Academy'           : 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt4b0d7a09d39f1875/5f2dc1f3b7dcf5546ea924d4/scholomance-academy-en-us-logo.png',
                'Tavern Brawl'                  : 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt04c5505a2318eb3b/5e277d8ae796ce423f4a16af/icon_mode_tavernbrawl.png',
                'The Boomsday Project'          : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/the-boomsday-project/en-us/logo-1062f458036c6406bd89fb6d7733b32c31d0b78d43ecfe65bbd150a41deac13094ee76b3cc57d0508d05b9a3eb042de6215f1540ec0d5862090ab66f95007f4d.png',
                'The Grand Tournament'          : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/the-grand-tournament/en-us/logo-1c1ae56f4aa3d2e7d59ab4a5c21e519a7dda5095320059015a82afa6f055fbca31f01efef655221bcfc2d409a0d1d74d8d5902ada6afb5529c313227b599f7db.png',
                'The League of Explorers'       : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/league-of-explorers/en-us/logo-f8ad4844d0bce217c0909d2c6db8c242d9ce7ff99312ca9c5f863638a598df4e60b9741a2db3ecbb2fd8ca84b9d016353bc6918dd2231257bb4ef0af29a2988c.png',
                'The Witchwood'                 : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/the-witchwood/en-us/logo-a5abc9a0bbec12fe854ac13165e22f1b79d377d85364e8dfb8c78f279065ceb9968c000c41bc4893d430bf61bcfb569e2e95a33b30c1c06b803b15bde2117c28.png',
                'Vanilla'                       : 'https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png',
                'Whispers of the Old Gods'      : 'https://d2q63o9r0h0ohi.cloudfront.net/images/card-sets/whispers-of-the-old-gods/en-us/logo-c686f8cdd9c8fa5f6868dc9d8694a8f9d9d3a540359cc1321fad0f3095b55b3cb2e89b228c2fd7c71a768e4854863a62139468ee5d4aed2f63cc5be645954ad7.png'
}

// { 'AshesofOutland' : AshesofOutland }

function loadingMessage(data){
  
  if(!data){
    return (
      <div> Data is Being Pulled from the server</div>
    )
  }else{
    return(
      <div> Data was successfully loaded</div>
    )
  }

  

}

function App() {
  
  const [data, setData] = useState(null);
  const [toggleView, setToggleView] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState(null);
  const [card, setCard] = useState(null);
  const [manaFilter, setManaFilter] = useState(ManaSelection)
  const [xPos, setxPos] = useState (0)
  const [yPos, setyPos] = useState (0)
  const [cardCollection, setCardCollection] = useState([])
  const [cardCollectionLoaded, setCardCollectionLoaded] = useState(false)
  const [filters, setFilters] = useState([])
  const [visible, setVisible] = useState(true)
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  // console.log('this is the object')
  // console.log(images)
  
 

  useEffect ( ()  => {
    
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "d9b9a00b2emsh012e8fec7af0114p119992jsn40330856ea89",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }
    })
    .then(response => response.json())
   // .then(JSON => console.log(JSON))
    .then(result => setData(result))
  }, [])
  
  // console.log(data)
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <AppContext.Provider value={{data, setData, 
                                       category,setCategory ,
                                       card ,setCard ,
                                       toggleView, setToggleView, 
                                       searchResults, setSearchResults, 
                                       images,
                                       manaFilter, setManaFilter,
                                       xPos, setxPos,
                                       yPos, setyPos,
                                       cardCollection, setCardCollection,
                                       cardCollectionLoaded, setCardCollectionLoaded,
                                       filters, setFilters,
                                       visible, setVisible,
                                       showFilterOptions, setShowFilterOptions}}>
          
          <NavBar></NavBar>

          {/* {loadingMessage(data)} */}
          <Switch>
              <Route path = "/" exact> <Home/> </Route>
              
              <Route path = "/List" exact><List></List></Route>
              <Route path = "/Search" exact><Search/></Route>
              <Route path = "/IndividualCard" exact><IndividualCard/></Route>
              <Route path = "/Category" exact> <Category/> </Route>
          </Switch>

          </AppContext.Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;
