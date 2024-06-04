import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('');
    
    const onInputChange = ( { target} ) =>{
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <=1 ) return;
        //setCategories( categories=> [ inputvalue, ...categories]);
        setinputValue('');
        onNewCategory(inputValue.trim());
        
    }

  return (
    <form onSubmit={ onSubmit } className='width-80'>
        <input
        type = 'text'
        placeholder="Buscar gifs"
        value = { inputValue }
        onChange={ onInputChange }
        />
        
        
    </form>
  )
}
