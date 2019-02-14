import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Results = ({ results }) => (
  <div>
    {
      results
      ? results.map(dataset => 
          <div>{dataset.title}</div>
        )
      : <div>no results</div>
    }
  </div>
);

export default Results;