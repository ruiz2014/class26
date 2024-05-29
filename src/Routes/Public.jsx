import {Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Detalle from '../Pages/Detalle'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'
import Contador from '../Pages/Contador'

function Public(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/alta" element={<Registro />}></Route>
            <Route path="/ingresar" element={<Login/>}></Route>
            <Route path="/contador" element={<Contador />}></Route>
            <Route path="/producto/:id" element={<Detalle />}></Route>
        </Routes>
    )
}

export default Public