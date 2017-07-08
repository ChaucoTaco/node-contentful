import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.scss';
import CardHolder from '../card-holder/';

class HomeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/home')
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => { console.log(err); });
  }
  render() {
    return (
      <div className={styles.homepage}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Dreamchasers</h1>
          <h2 className={styles.quote}> Dreamchasers chase Dreams </h2>
        </div>
        <CardHolder data={this.state.data} />
      </div>
    );
  }
}

export default HomeWrapper;
