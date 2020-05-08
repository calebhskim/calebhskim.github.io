import React, { Component } from 'react';

import Circle from './Circle';
import Links from './Links';
import Profile from './Profile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      profileText: 'Caleb Kim',
    };
  }

  changeText(profileText) {
    this.setState({
      profileText,
    });
  }

  render() {
    return (
      <div className='home' >
        <Circle />
        <Profile profileText={this.state.profileText} />
        <Links changeText={this.changeText} />
      </div>
    );
  }
}

Home.defaultProps = {};

export default Home;
