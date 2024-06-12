import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";




describe('Pruebas en <AddCategory />', () => { 

    test('Debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} } /> )
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'dota'} } );

        expect( input.value ).toBe('dota')
        screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
      
      const inputValue = 'dota';
      render( <AddCategory onNewCategory={ () => {} } /> )
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input( input, { target: { value: inputValue } } );
      fireEvent.submit( form );

      expect( input.value ).toBe('');
      screen.debug();
     

      


  });
});