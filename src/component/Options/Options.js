import React from 'react';
import classes from "./Options.module.css"
const Options = ({ data, selectName }) => {
    return (
        <div className={classes.OptionContainer}>
            {
                data.map(el => <div
                    key={el.id}
                    onClick={() => selectName(el.name)}
                    className={classes.Option}><span >{el.name}</span>

                </div>)
            }
        </div>
    );
};

export default Options;