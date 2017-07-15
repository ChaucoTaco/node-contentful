import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../card/';
import styles from './index.scss';

class CardHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowArray: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.data.reverse();
    const rowArray = [];
    let tempRow = [];

    data.map((item, index) => {
      if (index === data.length - 1 && index % 3 === 0) {
        rowArray.push(tempRow.reverse());
        tempRow = [];
        tempRow.push(item);
        rowArray.push(tempRow.reverse());
      } else if (index === data.length - 1) {
        tempRow.push(item);
        rowArray.push(tempRow.reverse());
      } else if (index === 0 || index % 3 !== 0) {
        tempRow.push(item);
      } else {
        rowArray.push(tempRow.reverse());
        tempRow = [];
        tempRow.push(item);
      }
    });

    this.setState({
      rowArray: rowArray.reverse(),
    });
  }

  render() {
    const rowArray = this.state.rowArray;
    return (
      <div className={styles.cardWrapper}>
        {
          rowArray.map((row, key) => {
            return (
              <div className={styles.cardHolder} key={key}>
                {
                    row.map((item, key2) => {
                      return (
                        <Card key={key2} data={item} />
                      );
                    })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default CardHolder;

CardHolder.propTypes = {
  data: PropTypes.array,
};
