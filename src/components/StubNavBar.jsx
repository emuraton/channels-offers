import React, {Component, PropTypes} from 'react';

const styles = {
  mainDiv : {
    paddingBottom: '2%',
    border: '1px solid #d9d9d9',
    textAlign: 'center',
    marginBottom: '10px',
  },
}

class StubNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {myBeautifulProps} = this.props;

    return (
      <div style={styles.mainDiv}>
        NAVBAR
      </div>
    );
  }
}

StubNavBar.propTypes = {
  //Some props
}

export default StubNavBar;
