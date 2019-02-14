import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 20px 0;
  font-size: 13px;
`;

const Item = styled.div`
  margin: 3px 4px;
`

const Results = ({ results }) => (
  <Wrapper>
    {
      results
      ? results.map(dataset => 
          <Item key={`d${dataset.id}`}>
            {dataset.title}
          </Item>
        )
      : <div>no results</div>
    }
  </Wrapper>
);

export default Results;