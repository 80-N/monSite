import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { getTitleByDrawingNumber } from 'src/selectors';

const mapStateToProps = (state) => ({
  drawings: state.drawings.list,
  title: getTitleByDrawingNumber(state.drawings.length),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
