import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Data from './assets/scripts/data';
import { useEffect, useState } from 'react';
import  DateFilter from './components/DateFilter'
import OptionsFilter from './components/OptionsFilter'

//importo el routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () =>
{
  const [filters,setFilters] = useState({
      dateFrom: new Date(), 
      dateTo: undefined,
      country: '',
      price: 0,
      rooms: 0
  })
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(()=>{
    setDataInfo(Data);  //seteo la info cuando se reenderiza
  },[])

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
      <Router>
            <Header filters = { filters }/>

            <Switch>

                  <Route path="/contacto">
                        <h1>Pagina de contacto</h1>
                  </Route>

                  <Route path="/">
                        <DateFilter icon="fas fa-sign-in-alt" 
                                    handleChangeFilterDate={handleChangeFilterDateIn}
                        />
                        <DateFilter icon="fas fa-sign-out-alt"
                                    handleChangeFilterDate={handleChangeFilterDateOut}
                        />    
                        <OptionsFilter countrys = { dataInfo.map(data => data.country) }/>              
                  </Route>         

            </Switch>

      </Router>
    </>
  );
  
}

export default App;
