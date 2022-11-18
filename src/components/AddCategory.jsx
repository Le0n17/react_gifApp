import { useState } from "react"



export const AddCategory = ({onAddCategories}) => {

    const [inputValue, setinputValue] = useState('')
        const inputChange = (event) =>{
          
            setinputValue(event.target.value)
        }

        const onSumit =(event)=>{
            event.preventDefault()
           
            if(inputValue.trim().length <=1 ) 
            return;
          
            onAddCategories(inputValue.trim())
            setinputValue('')
        }

  return (
    <form onSubmit={onSumit}>
    <input
    type={'text'}
    placeholder={'Buscar Gifs'}
    value={inputValue}
    onChange={inputChange}
    >

    </input>
    </form>
  )
}
