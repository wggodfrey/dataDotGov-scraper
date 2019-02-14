import { connect } from 'react-redux';

import { setSearchString } from 'actions/settings';

import Controller from 'components/Controller';

const mapStateToProps = state => ({
  searchString: state.settings.searchString,
  limitCount: state.settings.searchString,
});

const mapDispatchToProps = dispatch => ({
  handleSearchStringChange: (e) => dispatch(setSearchString(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);