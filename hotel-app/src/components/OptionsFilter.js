import React, { useEffect, useState } from "react";

//para hacerlo generico voy a recibir por parametros los diferentes tipos y pregunto cual llego
const OptionsFilter = ({countrys}) =>{

    
    const handleChange =(event)=> {
        console.log(event.target.value);
    }
    return(
        <>   
            <select onChange={ handleChange } className="form-select">
                    <option selected>Todos los paises</option>
            </select>        

        </>
    );
}

export default OptionsFilter;