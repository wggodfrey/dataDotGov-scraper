import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ResultsItem from 'components/ResultsItem';

const Table = styled.table`
  margin: 20px 0;
  border-collapse: collapse;
  border: none;
  width: 100%;
`;

const Th = styled.thead`
  font-size: 12px;
  color: #a9a9a9;
  text-align: left;
  & td {
    padding: 3px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & tr {
    background: #d3d3d3;
    color: #000000;
  }
`;

const Tbody = styled.tbody`
  font-size: 11px;
  color: #525252;
  height: 400px;
  overflow-y: auto;
  & td {
    padding: 3px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & tr:nth-child(even) {
    background: #d3d3d3;
  }
  & tr:nth-child(odd) {
    background: #ffffff;
  }
`;

const Results = ({ results }) => {

  const columns = [
    {label:'id', style:{width: '50px'}},
    {label:'title', style:{width: 'calc(40% - 50px)'}}, 
    {label:'description', style:{width: 'calc(60% - 50px)'}},
    {label:'format', style:{width: '50px'}}];

  return (
    <Table>
      <Th>
        <tr>
          {
            columns.map(col => 
              <th style={col.style}>{col.label.toUpperCase()}</th>
            )
          }
        </tr>
      </Th>
      <Tbody>
      {
        results
        ? results.map(dataset => 
            <ResultsItem 
              key={`d${dataset.id}`}
              columns={columns}
              elem={dataset}
            >
              {dataset.title}
            </ResultsItem>
          )
        : <div>no results</div>
      }
      </Tbody>
    </Table>
  )
};

export default Results;