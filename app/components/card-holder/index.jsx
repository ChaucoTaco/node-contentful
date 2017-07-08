import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/';
import styles from './index.scss';

const CardHolder = (props) => {
  const data = props.data;

  return (
    <div className={styles.cardHolder}>
      {
          data.map((item, key) => {
            return (
              <Card key={key} data={item} />
            );
          })
      }
    </div>
  );
};

export default CardHolder;

CardHolder.propTypes = {
  data: PropTypes.array,
};
