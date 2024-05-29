import instance from "../Config/axios"

export function getAllProductos(){
    return instance.get('sites/MLA/search?q=ipod')
    // const ver =  instance.get('sites/MLA/search?q=ipod')
    // console.log(ver)
}

export function getByIdProductos(id){
    return instance.get(`items/${id}`)
    // return instance.get('items/MLA1414767343')
//     console.log(id)
//    const ver =instance.get('items/'+id)
//    console.log(ver)  
}

export function createProductos(){
    
}