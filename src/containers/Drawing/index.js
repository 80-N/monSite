import { connect } from 'react-redux';

import Drawing from 'src/components/Drawing';
import { getDrawingBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const drawing = getDrawingBySlug(state.drawings.list, ownProps.slug);
  return {
    drawing,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Drawing);
