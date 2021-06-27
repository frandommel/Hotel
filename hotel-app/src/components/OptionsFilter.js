import React, { useEffect, useState } from "react";

const OptionsFilter = ({data, handleChangeFilterCountry}) =>{

    const handleChange =(event)=> {
        let option = event.target.value;
        handleChangeFilterCountry(option);
    }
    return(
        <>   
            <select onChange={ handleChange } className="form-select">
                    {data().map((dataItem)=>{
                        return(
                            <option>{dataItem}</option>
                        );
                    })}
            </select>        

        </>
    );
}

export default OptionsFilter;