import React from "react";
import  DateFilter from './DateFilter'
import OptionsFilter from './OptionsFilter'
const Filter = ({filters,setFilters}) =>
{
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
                    <OptionsFilter countrys={"argentina"}/> 
            </div>
            <div className="nav-item mx-1 optionClass">
                    <OptionsFilter countrys={"argentina"}/> 
            </div>
            <div className="nav-item mx-1 optionClass">
                    <OptionsFilter countrys={"argentina"}/> 
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