import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './clock.css';
import myClock from './myClock';
import myChart from './myChart';
import App from './App';
import  MyTimeComponent from './myClock';
import EchartsTest from './myChart';
import registerServiceWorker from './registerServiceWorker';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        colorIndex:0,
        colors : ["deepskyblue","#0f0","#00f"],
      data: [5, 20, 36, 10, 10, 20]
    }
  }

  changeClock(msg) {
    this.setState({
        color:msg
    })
  }

  changeChart(msg) {
    this.setState({
        data:msg
    })
  }
  render(){
    return (
      <div className='big-container'>
        <MyTimeComponent className="time-left" color={this.state.color} listener={this.changeChart.bind(this)}></MyTimeComponent>
        <EchartsTest className="chart-right" data={this.state.data} listener={this.changeClock.bind(this)}></EchartsTest>
      </div>
    );

  }

}

ReactDOM.render(
  <Test/>,
    document.getElementById('root'));
registerServiceWorker();
