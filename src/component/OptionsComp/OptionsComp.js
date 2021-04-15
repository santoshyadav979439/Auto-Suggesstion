import React from 'react';
import classes from "./OptionsComp.module.css"
const OptionsComp = ({data}) => {
    return (
        <>
            {
                data.map(el=><div><span key={el.id}>{el.name}</span></div>)
            }
        </>
    );
};

export default OptionsComp;