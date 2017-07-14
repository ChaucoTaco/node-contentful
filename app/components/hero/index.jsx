import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        heroImage: {
          url: '',
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.data;
    this.setState({
      data,
    });
  }

  render() {
    const data = this.state.data;
    const backgroundImageUrl = {
      backgroundImage: `url(${data.heroImage.url})`,
    };
    return (
      <div className={styles.heroWrapper}>
        <div className={styles.header} style={backgroundImageUrl}>
          <div className={styles.paragraphHolder}>
            <h1 className={styles.title}> {data.heroImage.title}</h1>
            <h2 className={styles.intro}>{data.heroImage.description}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

Hero.propTypes = {
  data: PropTypes.object,
};
