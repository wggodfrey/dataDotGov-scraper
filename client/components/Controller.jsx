import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Controller = ({ searchString, limitCount, handleSearchStringChange }) => (
  <div>
    <input 
      placeholder={'Search'}
      onChange={handleSearchStringChange}
      value={!!searchString? searchString: ''}
    />
  </div>
);

export default Controller