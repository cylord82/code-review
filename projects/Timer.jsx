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

    // this.nTimer = setInterval(this.forceUpdate(), 1000);
    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    // console.log(this.expireDate);
    // console.log(moment(this.props.expireDate).diff(moment()));
    // if (moment(this.props.expireDate).diff(moment()) > 0) {
    //   this.forceUpdate();
    // } else {
    //   alert('종료되었습니다');
    // }
    this.setState({
      date: moment(),
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.date);
    console.log(nextState);
    if (this.state.date.format('mm') === nextState.date.format('mm')) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    // <div>
    //   <div>현재시간은 {moment().format('LT')} 입니다</div>
    //   <div>{moment(this.props.expireDate).fromNow()}에 강의 종료합니다.</div>
    // </div>
    // {moment(expireDate).diff(moment(), 'seconds')}후에 강의 종료합니다.
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
