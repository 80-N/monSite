import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  drawings: state.drawings.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
