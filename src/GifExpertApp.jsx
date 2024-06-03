import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index";
import { AddQuantity } from "./components/AddQuantity";
import { LogoPc } from  "./components/LogoPc";


export const GifExpertApp = () => {

    const [ categories , setcategories ] = useState([' One Punch ']);

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
        

        <div className="flex">
            <AddCategory 
                onNewCategory = { ( value) => onAddCategory( value )}       
            />
            
            <AddQuantity className="poppins-regular"/>
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
