import React from "react";
import { Link } from "react-router-dom";

const Header = ({filters})=>
{   
    const dias = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ];
    return(
        <>
        <section className="container-fluid fondo-header">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h4>
                            desde el <strong>{dias[filters.dateFrom.getDay()]}, { filters.dateFrom.getDate()}/{filters.dateFrom.getMonth() + 1} de {filters.dateFrom.getFullYear()}</strong>
                            {filters.dateTo != undefined? " hasta "+dias[filters.dateTo.getDay()]+","+  filters.dateTo.getDate()+"/"+(filters.dateFrom.getMonth() + 1) +" de "+ filters.dateTo.getFullYear():""}
                        </h4>
                        <Link to="/contacto" className="text-right text-dark link">Contacto</Link>
                        <Link to="/" className="text-dark inicio">Inicio</Link>
                    </div>
                
                </div>
        </section>


        </>    
    );
}

export default Header;
