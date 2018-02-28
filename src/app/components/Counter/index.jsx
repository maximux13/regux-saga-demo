import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import Counter from './Counter';

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
