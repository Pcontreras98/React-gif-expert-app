import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('');
    const [selectValue, setselectValue] = useState('');
    
    const onInputChange = ( { target} ) =>{
        setinputValue(target.value);
    }

    const onSelectChange = ( { target } ) =>{
      setselectValue(target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <=1 || selectValue === '' ) return;
       
        setinputValue('');
        onNewCategory(inputValue.trim(),selectValue);
        
        
    }

  return (
    <form onSubmit={ onSubmit } className='width-100 flex'>
        <input
        type = 'text'
        placeholder="Buscar gifs"
        value = { inputValue }
        onChange={ onInputChange }
        />

        <select className='option-select' value = { selectValue } onChange={ onSelectChange } >
                <option value='' disabled>Cantidad</option>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={20}>20</option>
        </select>
    </form>
  )
}