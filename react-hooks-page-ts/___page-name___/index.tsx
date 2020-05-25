import React from "react";
import PropTypes from "prop-types";

import PageProps from "./props";
import usePageState from "./hooks";

import style from "./style.module.scss";

const ___PageName___ = (props: PageProps) => {
    const {

    } = usePageState(props);

    return (
        <div className={style.___pageName___}>

        </div>
    )
};

export default ___PageName___;