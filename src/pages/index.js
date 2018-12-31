import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      newYearsDay: new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`)
    };

    this.getTime = this.getTime.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    let days, hours, minutes, seconds;
    let current = new Date();
    let timeLeft = parseInt((this.state.newYearsDay - current) / 1000);
    // get days, adjust timeLeft
    days = parseInt(timeLeft / 86400);
    timeLeft = (timeLeft % 86400);
    // get hours, adjust timeLeft
    hours = ("0" + parseInt(timeLeft / 3600)).slice(-2);
    timeLeft = (timeLeft % 3600);
    // get minutes, adjust timeLeft
    minutes = ("0" + parseInt(timeLeft / 60)).slice(-2);
    timeLeft = (timeLeft % 60);
    // get seconds
    seconds = ("0" + parseInt(timeLeft)).slice(-2);
    // update state with time left
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100vw', height: '100vh'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Days</h1>
            <h2>{this.state.days}</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Hours</h1>
            <h2>{this.state.hours}</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Mins</h1>
            <h2>{this.state.minutes}</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Seconds</h1>
            <h2>{this.state.seconds}</h2>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage
