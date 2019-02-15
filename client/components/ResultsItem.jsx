import React from 'react';
import styled from 'styled-components';

const ResultsItem = ({columns, elem}) => (
  <tr>
    {
      columns.map(col =>
        <td style={col.style}>{elem[col.label]}</td>
      )
    }
  </tr>
);

export default ResultsItem;