import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index";

import { LogoPc } from  "./components/LogoPc";



export const GifExpertApp = () => {

    const [ categories , setcategories ] = useState([' Valorant ']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setcategories([newCategory,...categories]);
    }

    

  return (
    <>
        
        <h1 className="title-first bungee-spice-regular">
            <LogoPc/>    
            GifExpertApp
            
        </h1>
        

        <div className="">
            <AddCategory 
                onNewCategory = { ( value) => onAddCategory( value )}       
            />
            
            
        </div>

        
      
       
        { 
            categories.map( category => (
                <GifGrid 
                        key={ category }
                        category={ category }
                />
            ))
        }    
          


    </>
  )
}
