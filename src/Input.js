import React, {useState} from "react"



const Input =({setTerm, term}) => {

    const searchHandler =(e) => {
        return setTerm(e.target.value)
          }

    return(
 <form>
      <input type="text" 
     onChange={searchHandler}
    value ={term}
/>
             
</form>
    )
}
export default Input