import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const TIME_FORMAT = 'A h:mm';
class Timer extends Component {
  constructor(props) {
    // console.log(props);
    super(props);

    this.state = {
      date: moment(),
    };

    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    this.setState({
      date: moment(),
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.date);
    console.log(nextState);
    if (this.state.date.format('mm') === nextState.date.format('mm')) {
      return false;
    }
    return true;
  }

  render() {
    const { expireDate } = this.props;
    const { date } = this.state;
    console.log('render...');
    if (moment(expireDate) < date) {
      return <div>종료 되었습니다.</div>;
    }
    return (
      <div>
        <div>현재시간은 {date.format(TIME_FORMAT)}</div>
        <div>{moment(expireDate).fromNow()}에 강의 종료합니다.</div>
      </div>
    );
  }
}

export default Timer;
