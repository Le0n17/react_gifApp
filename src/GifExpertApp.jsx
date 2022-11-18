import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Challenger Hellcat' ])

    const onAddCategories = ( newCategory ) =>{

      if(categories.includes(newCategory))
      
      return 
 
        setCategories([newCategory,...categories])
      
     
    }

  return (
    <>
    <h1>Gif Expert App</h1>
    <AddCategory onAddCategories={value => onAddCategories(value)}>
    </AddCategory>
    
        { categories.map(( category ) =>(
          
            <GifGrid key={ category } category={ category } ></GifGrid>
            
        )) 
        } 
    
    </>
  )
}
