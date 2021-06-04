import React, { useEffect, useState } from "react";

const OptionsFilter = ({countrys}) =>{
    const [countryArray,setCountryArray] = useState([]);
    
    //seteo los paises, y busco si estan repetidos no lo agrego
    const setCountrys = () =>{
        let array = [];
        countrys.forEach(country => {
            if(array.indexOf(country) == -1){
                array.push(country);
                setCountryArray(array);
            }
        });
    }
    //setteo los paises
    useEffect(()=>{
        setCountrys();
    },[])

    const handleChange =(event)=> {
        console.log(event.target.value);
    }

    return(
        <>   
            <select onChange={ handleChange } style={ {width: '18%'} } class="form-select">
                    <option value="undefined" selected>Todos los paises</option>
                    {countryArray.map(country =>
                            <option name={country} value={country}>{country}</option>
                    )}

            </select>        

        </>
    );
}

export default OptionsFilter;