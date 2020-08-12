import { connect } from 'react-redux';
import { getDrawings } from 'src/actions';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.drawings.loading,
  error: state.drawings.error,
});

const mapDispatchToProps = (dispatch) => ({
  getDrawings: () => dispatch(getDrawings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
