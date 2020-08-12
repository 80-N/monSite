import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  drawings: state.drawings.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
