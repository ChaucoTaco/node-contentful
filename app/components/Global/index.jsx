import React, { Component } from 'react';
import axios from 'axios';

class HomeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080')
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => { console.log(err); });
  }
  render() {
    return (
      <div>
        {
          this.state.data.map((item, key) => {
            return (
              <div>
                <h1 key={key}> {item.title} </h1>
                <img src={item.heroImage.url} role="presentation" />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default HomeWrapper;
