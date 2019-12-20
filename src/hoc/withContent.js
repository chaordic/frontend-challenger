import React from "react";
import PropTypes from "prop-types";
import Loading from "../components/Loading";

export default Component => {
  const withContent = ({ isLoading, isError, ...props }) => {
    if (isLoading)
      return (
        <div style={{ textAlign: "center" }}>
          <Loading />
        </div>
      );
    if (isError)
      return (
        <div style={{ textAlign: "center" }}>
          Problemas ao acessar o conteudo
        </div>
      );
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
