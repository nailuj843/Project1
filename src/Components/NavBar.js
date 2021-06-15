import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'

const NavBar = () => {

    const {data} = useContext(AppContext)
   
    return (
        <div className="NavBar">
            <div className ='customLink'> Hearthstone Viewer 4000 </div>
            { data ? <Link className='customLink' to="/" >Home</Link> : <div className = 'loading'> Loading </div> }
            { data ? <Link className='customLink' to="/List" >List</Link> : <div className='loading'> Please </div>}
            { data ? <Link className='customLink' to="/Search" >Search</Link> : <div className='loading'> Wait </div>}
        </div>

    )
}

export default NavBar