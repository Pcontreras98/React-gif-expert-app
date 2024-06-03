import { GifItem } from './GifItem';
import { useFetechGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetechGifs( category );

    return (
        <>  
            <h3 className='title-category'> {category} </h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className='card-grid'>
            {             
                images.map(( image ) => (
                        <GifItem key={ image.id }
                                { ...image}
                        />
                    ))
                }
            </div>

        </>
    )
}
