import React from "react";

const DateFilter = ({icon, handleChangeFilterDate }) =>
{
    const handleChange = (event)=>{
        var date = new Date(event.target.value);
        if(String(date.getFullYear()).length == 4)
        {
            date.setDate(date.getDate()+1);
            handleChangeFilterDate(date);
        }

          
    }
    return(
        <>
             <div className="input-group">
                <span className="input-group-text">
                    <i className={icon}></i>
                </span>
                <input className="form-control" type="date" onChange={ handleChange }/>
            </div>
        </>
    );
}
export default DateFilter;


