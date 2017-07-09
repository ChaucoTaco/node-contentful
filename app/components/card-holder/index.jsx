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
    const data = nextProps.data;
    const rowArray = [];
    let tempRow = [];

    data.map((item, index) => {
      if (index === data.length - 1) {
        tempRow.push(item);
        rowArray.push(tempRow);
      } else if (index === 0 || index % 4 !== 0) {
        tempRow.push(item);
      } else {
        rowArray.push(tempRow);
        tempRow = [];
        tempRow.push(item);
      }
    });

    this.setState({
      rowArray,
    });
  }

  render() {
    const rowArray = this.state.rowArray;
    return (
      <div>
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
