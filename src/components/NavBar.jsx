import React from 'react'
import {Link, link} from 'react-router-dom'

function NavBar(){
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alta'>Registro</Link></li>
            <li><Link to='/ingresar'>Ingresar</Link></li>
            <li><Link to='/contador'>Contador</Link></li>
        </ul>
    )
}
export default NavBar;