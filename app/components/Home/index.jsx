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
    axios.get('https://dreamchasers.herokuapp.com/home')
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
          <div className={styles.about}>
            <p className={styles.aboutCopy}>
              Chau and Katie. Travel. Food. Cocktails. People. Some other stuff. Sometimes Cats?
            </p>
            <div>
              <span className={styles.emoji}>👸🏻</span>:Mostly Katie.<br />
              <span className={styles.emoji}>📸</span>:Mostly Chau
            </div>
          </div>
        </div>
        <CardHolder data={this.state.data} />
      </div>
    );
  }
}

export default HomeWrapper;
