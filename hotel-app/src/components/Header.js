import React from "react";

const Header = ({filters})=>
{   
    console.log(filters);
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
                        <a className="text-right text-dark link">Contacto</a>
                    </div>
                
                </div>
        </section>


        </>    
    );
}

export default Header;
