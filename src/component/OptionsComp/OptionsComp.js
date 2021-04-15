import React from 'react';
import classes from "./OptionsComp.module.css"
const OptionsComp = ({data,selectName}) => {
    return (
        <div className={classes.OptionContainer}>
            {
                data.map(el=><div 
                    key={el.id}
                    onClick={()=>selectName(el.name)}
                    className={classes.Option}><span >{el.name}</span>
                    
                    </div>)
            }
        </div>
    );
};

export default OptionsComp;