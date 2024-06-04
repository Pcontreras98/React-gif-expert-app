import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";

export const useFetechGifs = ( category, limit ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading ] = useState([]);

    const getImages = async() =>{
        const newImages = await getGifs( category, limit );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();

    }, []);

    

    return {
        images,
        isLoading
    }
}
