import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components/index';
/* Una aplicación en react es un conjunto de componentes*/
export const GifExpertApp = () => {

    {/*Para almacenar información y esa información cambia el html,
        se usan hooks, el mas usado es useState() 
       Los nombres de las variables se usan en plural 
       para saber que son varios regisros los que serán guardados */
    }

    //Arreglo de categorias
    const [categories, setCategories] = useState([ 'Naruto']);
    
    const onAddCategory = (newCategory) =>{
        //console.log(newCategory);


        //Condicion para evitar repetir un elemento existente
        if(categories.includes(newCategory)){
            return;
        }

        //Añade un elemento al arreglo
        setCategories([newCategory, ...categories]);
       
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>
            {/* Input */}

            {/* Se añade un nuevo Componente */}
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value)}    
            />

            {/* Listado de Gif */}

            {
                categories.map( (category) => {
                            return <GifGrid 
                            
                                key= {category}
                                category = {category}
                            
                            />
                })
            }

            





            {/* <button onClick={ onAddCategory }>Agregar</button>*/}
   

                {/*recorre los elementos de un arreglo*/}
                {   /*
                
                    categories.map(category => {
                        return <li key={ category }>{category}</li>
                    }) */
                }


                
     
                {/* Gif Item */}
        </>
    )
}
