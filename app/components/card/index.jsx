import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Card = (props) => {
  const data = props.data;

  return (
    <Link to={`/${data.id}`} className={styles.homepageCard}>
      <img className={styles.image} src={data.heroImage.url} role="presentation" />
      <h1 className={styles.title}> {data.title}</h1>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object,
};
