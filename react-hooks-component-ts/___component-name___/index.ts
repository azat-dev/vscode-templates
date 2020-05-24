import React from "react";

import ComponentProps from "./props";
import useComponentState from "./hooks";

import style from "./style.module.scss";

const ___ComponentName___ = (props: ComponentProps) => {
    const {
    } = useComponentState(props);

    return (
        <div className= { style.___componentName___ } >

        </div>    
    );
};

export default ___ComponentName___;