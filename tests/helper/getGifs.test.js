import { getGifs } from '../../src/helper/getGifs';

describe('Prueba de GetGifs', () => { 
    test('Debe de retonar un arreglo de gifs', async() => { 
        
        const gifs =  await getGifs('dota');

        expect( gifs.length ).toBeGreaterThan( 0 );
        
        expect ( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    }) 
})