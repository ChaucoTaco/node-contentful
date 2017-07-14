import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PhotoBlock = (props) => {
  const data = props.data;
  let photoBlockType;

  switch (data.galleryType) {
    case 'full-bleed':
      photoBlockType = styles.photoBlockFullBleed;
      break;
    case 'spread':
      photoBlockType = styles.photoBlockSpread;
      break;
    case 'stack-left':
      photoBlockType = styles.photoBlockStackLeft;
      break;
    case 'stack-right':
      photoBlockType = styles.photoBlockStackRight;
      break;
    default:
      photoBlockType = styles.photoBlock;
  }


  return (
    <div className={photoBlockType}>
      <div className={styles.imageWrapper}>
        {
          data.photos.map((item, key) => {
            return (
              <div className={styles.imageContainer} key={key}>
                <img className={styles.image} src={item.url} role="presentation" />
              </div>
            );
          })
        }
      </div>
      {
        data.copy && <h1 className={styles.title}> {data.copy}</h1>
      }
    </div>
  );
};

export default PhotoBlock;

PhotoBlock.propTypes = {
  data: PropTypes.object,
};
