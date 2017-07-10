import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div>
        {
          data.photoBlocks.map((item, key) => {
            return (
              <PhotoBlock data={item} key={key} />
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
