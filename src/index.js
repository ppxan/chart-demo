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
      colors: "#fff",
      data: [5, 20, 36, 10, 10, 20]
    }
  }

  changeClock() {
    if (this.state.colors === '#fff') {
      this.setState({
        colors: "green"
      })
    }
    else {
      this.setState({
        colors: "fff"
      })
    }
  }

  changeChart() {
    if (this.state.data[0] === 5) {
      this.setState({
        data: [10, 20, 30, 40, 50, 60]
      })
    }
    else {
      this.setState({
        data: [5, 20, 36, 10, 10, 20]
      })
    }
  }
  render(){
    return (
      <div className='big-container'>
        < MyTimeComponent className="time-left" color={this.state.colors} onClick={this.changeClock.bind(this)}></MyTimeComponent>
        <EchartsTest className="chart-right" data={this.state.data} onClick={this.changeChart.bind(this)}></EchartsTest>
      </div>
    );
  }

}

ReactDOM.render(
  <Test/>,
    document.getElementById('root'));
registerServiceWorker();
