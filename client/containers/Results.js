import { connect } from 'react-redux';

import Results from 'components/Results';

const mapStateToProps = state => ({
  searchString: state.settings.searchString,
  limitCount: state.settings.searchString,
});


export default connect(mapStateToProps, null)(Results);