import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import styles from './index.scss';
import PhotoBlock from '../photo-block';

class PhotoBlockWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        photoBlocks: [],
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
    const {imageClick} = this.props;

    return (
      <div className={styles.photoWrapper}>
        {
          data.photoBlocks.map((item, key) => {
            return (
              <LazyLoad
                height={500}
                offset={500}
                key={key}
              >
                <PhotoBlock data={item} imageClick={imageClick}/>
              </LazyLoad>
            );
          })
        }
      </div>
    );
  }
}

export default PhotoBlockWrapper;

PhotoBlockWrapper.propTypes = {
  data: PropTypes.object,
};
