import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'



const List = () => {
    console.log('list page is trying to load')
    const {data} = useContext( AppContext)
    const {setCategory} = useContext( AppContext)
    const {images} = useContext(AppContext)
    // console.log(data)

    if(!data){
        window.location.href = 'http://localhost:3000'
    }
  //  window.scrollTo(0, 0);
    let keys = Object.keys(data).sort()

    

    keys = keys.filter(key => data[key].length > 0 )
    keys = keys.filter(key => key !== 'Credits')
    keys = keys.filter(key => key !== 'Missions')
    keys = keys.filter(key => key !== 'Taverns of Time')
    keys = keys.filter(key => key !== 'Hero Skins')
    
    function UpdateCategory(key) {
        //console.log(key)
        setCategory(key)
    }

    
    
    return (
        <div>
            <br></br>
            <br></br><br></br>

            
            <br></br>

            

            {/* <img src={AshesOfOutland} ></img>
            <img src={otherImage} ></img> */}
            

            <div className='column'>
                {keys.map(key => {
                    let imagePath = ""

                    return <Link className='customLink' to="/Category" onClick={() => UpdateCategory(key)}>
                        
                        

                        {/* {address = key + ".png"} */}
                        <img className='categoryImage' src={images[key]} alt={key}  title={key} ></img>

                        
                        
                    </Link> })}
            </div>
        </div> 

    )
}

export default List


