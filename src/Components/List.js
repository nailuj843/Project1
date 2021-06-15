import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'


const List = () => {
    console.log('list page is trying to load')
    const {data} = useContext( AppContext)
    const {setCategory} = useContext( AppContext)
    // console.log(data)

    if(!data){
        window.location.href = 'http://localhost:3000'
    }

    let keys = Object.keys(data).sort()

    //console.log(keys.map(key => console.log(data[key].length + '   ' + key)))

    keys = keys.filter(key => data[key].length > 0 )
    
    function UpdateCategory(key) {
        //console.log(key)
        setCategory(key)
    }

    let address = "Ashes of Outland.png"
    
    return (
        <div>
            <br></br>
            <br></br>

            This is the List page
            
                {keys.map(key => 
                    <Link className='customLink' to="/Category" onClick={() => UpdateCategory(key)}>
                        
                        {/* {address = key + ".png"} */}
                        {/* <img src={address} > </img> */}

                        {key}
                        
                    </Link> )}
            
        </div> 

    )
}

export default List


