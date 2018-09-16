import React from 'react';
import ReactDOM from 'react-dom';
import './clock.css';

export default class MyTimeComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time: new Date(),
      color: props.color
    };
    setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000)
    setInterval(()=>{
      this.ctx = this.refs.canvas.getContext('2d');
      this.ctx.beginPath()
      for (let angle = 0; angle <= 12; angle++) {
        this.c(34, 40, angle * Math.PI / 6)
      }
      this.c(0, 30, Math.PI / 30 * this.state.time.getSeconds())
      this.c(0, 20, Math.PI / 30 * this.state.time.getMinutes())
      this.c(0, 10, Math.PI / 6 * this.state.time.getHours()+this.state.time.getMinutes()*Math.PI/360)
      this.ctx.clearRect(0,0,80,80)
      this.ctx.stroke()
    },1000)
  }

  a (b) {
    if (b < 10) {
      return ('0' + b.toString());
    }
    return (b.toString());
  }
  listener(){
    this.props.listener([Math.random(),Math.random(),Math.random(),Math.random(),Math.random()])
  }
  c (start, end, angle){
    angle = angle - Math.PI / 2
    this.ctx.moveTo(start * Math.cos(angle) + 40, start * Math.sin(angle) + 40)
    this.ctx.lineTo(end * Math.cos(angle) + 40, end * Math.sin(angle) + 40)
  }
  click (){
    alert(this.a(this.state.time.getHours()) + ':' +this.a(this.state.time.getMinutes()) + ':' +this.a(this.state.time.getSeconds()))
  }

  render() {
    return (
      <div className="container">
        <h3 className="bg-bottom">
          <a
            href="https://www.baidu.com/link?url=G0mPIPqtWPFWgfxENRXx-DoMZb4NtZp6VIgvCWe54e-NARfVUKhYj39yTYq-uv9t&wd=&eqid=c6d8a79a00000820000000025b91d469"
            target="_blank">
            北京时间-国家授时中心标准时间
          </a>
        </h3>
        <div className="bg-box" style={{backgroundColor:this.props.color}} onClick={ this.listener.bind(this)}>
          <canvas className="clock" width={80} height={80} ref="canvas">
          </canvas>
          <p className="bg-time" onClick={this.click.bind(this)}>
            {this.a(this.state.time.getHours())}:{this.a(this.state.time.getMinutes())}:{this.a(this.state.time.getSeconds())}
          </p>
          <div>
            <p className="bg-week">星期天</p>
            <p className="bg-data">2018年9月16号</p>
          </div>
        </div>
      </div>
    );
  }
}
