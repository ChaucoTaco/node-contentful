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
      overlay: false
    };
    this.props = props;
    this.imageClick = this.imageClick.bind(this);
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

  imageClick(event) {
    this.setState({
      overlay: !this.state.overlay
    });
  }

  render() {
    const data = this.state.data[0];
    const overlay = this.state.overlay;
    return (
      <div className={overlay ? styles.overlayPage : styles.postPage}>
        <Hero data={data} />
        <PhotoBlockWrapper data={data} imageClick={this.imageClick} />
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
