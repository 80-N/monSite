import { connect } from 'react-redux';

import Drawing from 'src/components/Drawing';

const mapStateToProps = (state) => ({
  drawing: state.drawings.list[0],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Drawing);
