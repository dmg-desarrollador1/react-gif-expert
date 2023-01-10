//import React from 'react'
//useEffect.- es un hook para disparar efectos secundarios, es decir, ejecutar un proceso cuando 'algo' suceda.


import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { imagenes, isLoading } = useFetchGifs(category);
    //console.log({imagenes, isLoading});

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            

            
    
            <div className= "card-grid">
                {
                    imagenes.map( (imagen) =>{
                        return (

                                <GifItem 
                                    key= {imagen.id}
                                    
                                    /* de ésta manera se mandan todas las propiedades, evitando mandar una por una */ 

                                    { ...imagen }
                                />    
                                          
                        );    
                    })
                }
            </div>
            
        
            
            
        </>
    )
}
