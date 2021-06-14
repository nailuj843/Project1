import { useContext } from "react"
import {Link} from 'react-router-dom'
import AppContext from '../Context/AppContext'

const NavBar = () => {
return (
    <div className="NavBar">
        <div className ='customLink'> Hearthstone Viewer 4000 </div>
        <Link className='customLink' to="/" >Home</Link>
        <Link className='customLink' to="/List" >List</Link>
        <Link className='customLink' to="/Search" >Search</Link>
    </div>

)
}

export default NavBar