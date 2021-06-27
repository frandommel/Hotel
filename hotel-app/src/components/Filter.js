import React, { useEffect, useState } from "react";
import  DateFilter from './DateFilter'
import OptionsFilter from './OptionsFilter'
const Filter = ({filters,setFilters, dataInfo}) =>
{
    const[countrys, setCountrys] = useState([]);

        //seteo fecha ingreso
    const handleChangeFilterDateIn = (fecha)=>{
        let data = {...filters}
        setFilters({
        dateFrom: fecha,
        dateTo: data.dateTo,
        country: data.country,
        price: data.price,
        rooms: data.rooms
        })
    }

    //seteo fecha egreso
    const handleChangeFilterDateOut = (fecha)=>{
        let data = {...filters}
        setFilters({
        dateFrom: data.dateFrom,
        dateTo: fecha,
        country: data.country,
        price: data.price,
        rooms: data.rooms
        })
    }
    const handleChangeFilterCountry = (country) =>
    {
        let data = {...filters}
        setFilters({
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        country: country,
        price: data.price,
        rooms: data.rooms
        })
    }
    //filtro el pais para mandarlo
    const countryFilter = () =>{
        var Array = dataInfo.map(data => data.country);
        let country = new Set(Array);   //hago un set para no agregar repetidos 
        let countryArray = [...country];
        return countryArray;
    };
    const priceFilter = () =>{
        let array = ["$","$$","$$$","$$$$"];
        return array;
    }
    const roomFilter = () =>{
        let array = ["Habitaciones","1 a 10","11 a 20","21 a 30","31 a 40"];
        return array;       
    }

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div className="nav-item mx-1 ">
                    <DateFilter icon="fas fa-sign-in-alt" 
                                handleChangeFilterDate={handleChangeFilterDateIn}
                                />
            </div>
            <div className="nav-item mx-1 ">
                    <DateFilter icon="fas fa-sign-out-alt"
                                handleChangeFilterDate={handleChangeFilterDateOut}
                                /> 
            </div>
            <div className="nav-item mx-1 optionClass">
                    <OptionsFilter data={countryFilter} 
                                   handleChangeFilterCountry = { handleChangeFilterCountry }/> 
            </div>
            <div className="nav-item mx-1 optionClass">
                    <OptionsFilter data={ priceFilter }/> 
            </div>    
            <div className="nav-item mx-1 optionClass">
                    <OptionsFilter data={ roomFilter }/> 
            </div>                   
        </nav>
        </>
    );
}

export default Filter;
//countrys = { dataInfo.map(data => data.country) }

/*
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
    },[countrys])


*/ 