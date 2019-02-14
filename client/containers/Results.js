import { connect } from 'react-redux';

import Results from 'components/Results';

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps, null)(Results);