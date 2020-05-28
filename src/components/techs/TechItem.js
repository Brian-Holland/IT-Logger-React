import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
    return <li className="collection"></li>;
};

TechItem.PropTypes = {
    tech: PropTypes.object.isRequired,
};

export default TechItem;
