
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange= (event) =>{
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = ( event ) =>{
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);


        if( inputValue.trim().length <=1) return;

                        //categories.- callback de las categorias anteriores(estado actual)
        //setCategories( categories => [ inputValue, ...categories]);

        onNewCategory( inputValue.trim());

        //limpiar campo
        setInputValue('');
    }

    return (
        <form onSubmit={ (event)=> onSubmit(event) } >
            <input type="text" placeholder="Buscar Gifs" value= { inputValue } onChange= { (event)=> onInputChange(event) } />
        </form>
        
    )


}
