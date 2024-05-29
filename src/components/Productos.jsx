import React, {useState, useEffect} from 'react'
import { getAllProductos } from '../Services/productosService'
import Producto from './Producto'

function Productos(){
    const titulos = 'Listado'
    const [productos, setProductos] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(
        () => {
            const result = async ()=>{
                try{
                    const responseData = await getAllProductos()
                    setProductos(responseData.data.results)
                    setIsloading(false)
                }catch(error){
                    console.log('Error', error)
                }
            }
            result()
        }, []
    )

    const filtrar = () =>{
        setProductos({
           id:3,
           title:'iphone',
           price:234,
           category:'Ceulares'                         
        })
    }

    if(isLoading){
        return (<p>Cargando</p>)
    }else{
        return(
            <div>
                <h3>{titulos}</h3>
                {productos.map((producto, i) => <Producto key={i} {...producto}/>)}
                <button onClick={filtrar}>Filtrar</button>
            </div>
        )
    }
    // <h2>{title}</h2>
    // <img src={thumbnail} alt="" />
    // <p>{category}</p>
    // <p>{price}</p>
    // <p>{category_id}</p>

    // <button><Link to={`/producto${id}`}></Link></button>  
}

export default Productos;
    
