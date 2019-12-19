import React from "react";
import PropTypes from "prop-types";

import withContent from "./withContent";

import Card from "../components/Card";

export default Component => {
  const withCard = ({ className, title, tag, ...props }) => (
    <Card tag="section" className={className}>
      <h1>{title}</h1>
      {withContent(Component)(props)}
    </Card>
  );

  withCard.defaultProps = {
    tag: "section"
  };

  withCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    tag: PropTypes.string
  };

  return withCard;
};
