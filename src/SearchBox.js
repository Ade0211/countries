import React from "react"

const SearchBox =(term) =>{
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || 
        x.region.toLowerCase().includes(term.toLowerCase());
    }
    
    }
    export default SearchBox;