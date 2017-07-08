import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Card from '../card/';

class PostWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.props = props;
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/post/${this.props.match.params.id}`)
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => { console.log(err); });
  }
  render() {
    return (
      <div className="homepage">
        <div className="cardHolder">
          {
              this.state.data.map((item, key) => {
                return (
                  <Card key={key} data={item} />
                );
              })
          }
        </div>
      </div>
    );
  }
}

export default PostWrapper;

PostWrapper.PropTypes = {
  match: PropTypes.object,
};
