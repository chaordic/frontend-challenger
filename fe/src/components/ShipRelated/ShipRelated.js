import React from 'react';
import { string, func } from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './styles.scss';

const ShipRelated = ({ id, onClick }) => (
  <a
    className={styles['ship-related']}
    key={id}
    href={`#shipItem-${id}`}
    onClick={onClick}
  >
    {id}
  </a>
);

ShipRelated.propTypes = {
  id: string.isRequired,
  onClick: func,
};

ShipRelated.defaultProps = {
  onClick: () => {},
};

export default cssModules(ShipRelated, styles, { allowMultiple: true });
