import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PhotoBlock = (props) => {
  const data = props.data;

  return (
    <div className={styles.photoBlock}>
      <div className={styles.imageWrapper}>
        {
          data.photos.map((item, key) => {
            return (
              <div className={styles.imageContainer} key={key}>
                <img className={styles.image} src={item.url} role="presentation"/>
              </div>
            );
          })
        }
      </div>
      <h1 className={styles.title}> {data.copy}</h1>
    </div>
  );
};

export default PhotoBlock;

PhotoBlock.propTypes = {
  data: PropTypes.object,
};
