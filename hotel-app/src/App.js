import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Data from './assets/scripts/data';
import { useState } from 'react';
import  DateFilter from './components/DateFilter'

const App = () =>
{
  const [filters,setFilters] = useState({
      dateFrom: new Date(), 
      dateTo: undefined,
      country: '',
      price: 0,
      rooms: 0
  })

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

  return (

    <>
        <Header filters = { filters }/>
        <DateFilter 
          icon="fas fa-sign-in-alt" 
          handleChangeFilterDate={handleChangeFilterDateIn}
        />
        <DateFilter icon="fas fa-sign-out-alt"
                    handleChangeFilterDate={handleChangeFilterDateOut}
        />
       

    </>
  );
  
}

export default App;
