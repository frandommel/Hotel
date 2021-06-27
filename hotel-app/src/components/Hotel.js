import React from "react";
const Hotel = ({hotels, filters}) =>{

    //filtro y pregunto si ya pusieron algun pais o no
    const filterCountry = () =>{
        if(filters.country === "")
        {
            return hotels
        }else{
            return hotels.filter((filtro) => filtro.country === filters.country);
        }
    }
    return(
        <>
           <div class="row row-cols-1 row-cols-md-3 g-4">
                {filterCountry().map(data=>{
                    return(
                     <div key={data.slug}className="col">
                        <div className="card">                       
                            <img src="../assets/images/la-bamba-de-areco.jpg" className="card-img-top img-fluid" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{ data.description }</p>
                                <p className="card-text small">{ data.country }</p>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </>
    );
}

export default Hotel;
