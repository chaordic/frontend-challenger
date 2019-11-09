import React from 'react';
import { func, string, bool } from 'prop-types';

const SearchContainer = ({ onUpdate, text, onClick, availableButton, onKeyUp }) => (
  <header>
    <h3>Consultar</h3>
    <div>
      <p>CEP:</p>
      <input
        type="text"
        value={text}
        onChange={onUpdate}
        onKeyUp={onKeyUp}
        placeholder="00000-000"
        pattern="\d*"
        maxLength="9"
        tabIndex="0"
        autoFocus
      />
      <button type="button" onClick={onClick} disabled={!availableButton}>Buscar</button>
    </div>
  </header>
);

SearchContainer.propTypes = {
  onUpdate: func.isRequired,
  onClick: func.isRequired,
  text: string,
  availableButton: bool,
  onKeyUp: func,
};

SearchContainer.defaultProps = {
  text: '',
  availableButton: false,
  onKeyUp: () => {},
};

export default SearchContainer;
