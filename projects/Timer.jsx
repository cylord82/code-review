import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    // console.log(props);
    super(props);

    // this.nTimer = setInterval(this.forceUpdate(), 1000);
    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    console.log(this.expireDate);
    console.log(moment(this.props.expireDate).diff(moment()));
    if (moment(this.props.expireDate).diff(moment()) > 0) {
      this.forceUpdate();
    } else {
      alert('종료되었습니다');
    }
  };

  render() {
    return (
      <div>
        <div>현재시간은 {moment().format('LT')} 입니다</div>
        <div>{moment(this.props.expireDate).fromNow()}에 강의 종료합니다.</div>
      </div>
    );
  }
}

export default Timer;
