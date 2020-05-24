import React from "react";
import PropTypes from "prop-types";

import usePageState from "./hooks";

import style from "./style.module.scss";

const ___PageName___ = (props) => {
    const {

    } = usePageState(props);

    return (
        <div className={style.___pageName___}>

        </div>
    )
};

___PageName___.propTypes = {
};

___PageName___.defaultProps = {
};

export default ___PageName___;