import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';
import Hero from '../hero';
import PhotoBlockWrapper from '../photo-block-wrapper';

class PostWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.props = props;
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    axios.get(`https://dreamchasers.herokuapp.com/post/${this.props.match.params.id}`)
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => { console.log(err); });
  }
  render() {
    const data = this.state.data[0];
    return (
      <div className={styles.postPage}>
        <Hero data={data} />
        <PhotoBlockWrapper data={data} />
        <Link to="/" className={styles.homeLink}> Home </Link>
      </div>
    );
  }
}

export default PostWrapper;

PostWrapper.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.object,
    }),
  }),
};
