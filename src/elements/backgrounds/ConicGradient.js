import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/backgrounds/conic_gradient.scss';

class ConicGradient extends Component {
  static propTypes = {
    colors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    style: PropTypes.shape({
      container: PropTypes.object
    })
  };
  static defaultStyles = {
    gradientStyle: {
      width: '200px',
      height: '200px',
      borderRadius: '10px'
    }
  };
  static defaultColors = [
    'red',
    'magenta',
    'blue',
    'cyan',
    'lime',
    'yellow',
    'red'
  ];
  joiner = (arrayOfStrings, toBeJoinedUsing) => {
    return arrayOfStrings.join(toBeJoinedUsing);
  };
  checkColorAsObject() {
    let { background } = this.props.style.container;
    const { colors } = this.props;
    let gradientColors = this.joiner(ConicGradient.defaultColors, ', ');
    if (colors) {
      gradientColors =
        typeof colors === 'object' ? this.joiner(colors, ', ') : colors;
    }
    if (!background) {
      ConicGradient.defaultStyles.gradientStyle.background =
        `conic-gradient(${gradientColors})`;
    }
  }
  render() {
    this.checkColorAsObject();
    return (
      <Fragment>  
        <div
          style={{
            ...ConicGradient.defaultStyles.gradientStyle,
            ...this.props.style.container
          }}
        />
      </Fragment>
    );
  }
}

export default ConicGradient;
