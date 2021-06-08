import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Data from './assets/scripts/data';
import { useEffect, useState } from 'react';

import Filter from './components/Filter'
//importo el routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DateFilter from './components/DateFilter';

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

  return (
    <>
      <Router>
            <Header filters = { filters }/>

            <Switch>

                  <Route path="/contacto">
                        <h1>Pagina de contacto</h1>
                  </Route>

                  <Route path="/">
                      <Filter filters={filters} setFilters={setFilters}/>
                  </Route>         

            </Switch>

      </Router>
    </>
  );
  
}

export default App;
