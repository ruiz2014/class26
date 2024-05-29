import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import { getByIdProductos } from '../Services/productosService'
// import axios from 'axios';

function Detalle(){
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        ()=>{
           const result = async () =>{
            try{
                const responseData = await getByIdProductos(id)
                setProducto(responseData.data)
                setIsLoading(false)
                // axios.get('https://api.mercadolibre.com/items/MLA1414767343')
                // .then(response => {
                //     setProducto(response.data);
                // })

                // const responseData = await getByIdProductos(id).then(response =>{setProducto(response.data)})
                
                // if(responseData){
                //     responseData.then(res => {
                //         const persons = res.data;
                //         // this.setState({ persons });
                //         setProducto({persons})
                //       })
                //     // setProducto(responseData)
                //     // console.log(responseData.attributes)
                // }
                // console.log(responseData.data)
                // console.log(producto)  
            }catch(error){
                console.log('error', error)
            } 
        }
        result() 
        }, [id]
    )
    if(isLoading){
        return (<p>Cargando</p>)
    }else{
        return(
            <div>
                <button><Link to="/">Inicio</Link></button>
                <h2>{producto.title}</h2>
                <img src={producto.thumbnail} alt="" />
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Detalle