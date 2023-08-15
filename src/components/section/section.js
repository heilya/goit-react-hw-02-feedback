import React from 'react';


export const Secnion = ({title, children}) =>{
    return(
        <div>
           <h2>{title}</h2>
           {children}
        </div>
    )
}