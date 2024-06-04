import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index";

import { LogoPc } from  "./components/LogoPc";



export const GifExpertApp = () => {

    const [ categories , setcategories ] = useState([{ category: 'Valorant', limit: 8 }]);

    const onAddCategory = (newCategory, limit) => {
        if (categories.includes(newCategory)) return;

        setcategories([{ category: newCategory, limit: limit },...categories]);
    }

    

  return (
    <>
        
        <h1 className="title-first bungee-spice-regular">

            
            <LogoPc/>    
            GifExpertApp
        </h1>
        
        <div>
                <AddCategory
                    onNewCategory={(value, limit) => onAddCategory(value, limit)}
                />

        </div>

        {   
                    categories.map(({ category, limit }) => (
                    <GifGrid key={category} category={category} limit={limit} />
        ))}
          


    </>
  )
}
