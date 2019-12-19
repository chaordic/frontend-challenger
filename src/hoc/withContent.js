import React from "react";
import PropTypes from "prop-types";

export default Component => {
  const withContent = ({ isLoading, isError, ...props }) => {
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Hubo un problema con la solicitud.</h1>;
    return <Component {...props} />;
  };

  withContent.defaultProps = {
    isLoading: false,
    isError: false
  };

  withContent.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool
  };

  return withContent;
};
