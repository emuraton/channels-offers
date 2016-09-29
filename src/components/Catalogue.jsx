import React, {Component, PropTypes} from 'react';

class Catalogue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {test} = this.props;

    return (
      <main>
        <div>Hello channels</div>
      </main>
    );
  }
}

Catalogue.propTypes = {
  test: PropTypes.number.isRequired,
}

export default Catalogue;
