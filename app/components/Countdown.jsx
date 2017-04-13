var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls =  require('Controls');

// This is a container component and maintains state
    var Countdown = React.createClass ({
        getInitialState: function () { // what value should be shown in the clock
            return {
                count: 0,
                countdownStatus: 'stopped'
            };
        },
        componentDidUpdate: function (prevProps, prevState) {
            if (this.state.countdownStatus !== prevState.countdownStatus) {
                switch (this.state.countdownStatus) {
                    case 'started':
                        this.startTimer();
                        break;
                    case 'stopped':
                        this.setState({count: 0});
                    case 'paused':
                        clearInterval(this.timer)
                        this.timer = undefined;
                        break;
                }
            }
        },
       // componentWillUpdate: function (nextProps, nextState) {  // these called lifecycle methods
        //   // console.log('componentWillMount');
      //  },
      //  componentWillMount: function () {  // these called lifecycle methods
      //      console.log('componentWillMount');
     //   },
     //   componentDidMount: function () {
     //       console.log('componentDidMount');
     //   },
        componentWillUnmount: function () {
            //console.log('componentDidUnmount');
            clearInterval(this.timer);
            this.timer = undefined;
        },
        startTimer: function () {
            this.timer =  setInterval(() => {
                var newCount = this.state.count -1;
                this.setState({
                    count: newCount >= 0 ? newCount : 0
                });

                if (newCount === 0) {
                    this.setState({countdownStatus: 'stopped'});
                }
            }, 1000);
        },
        handleSetCountdown: function (seconds) { // this will get called when the form get valid input
           this.setState({
               count: seconds,  // sends the updated state
               countdownStatus: 'started'
           });
        },
        handleStatusChange: function (newStatus) {
            this.setState({countdownStatus: newStatus});
        },
        render: function() {
            var {count, countdownStatus} = this.state;
            var renderControlArea = () => {  // to dynamically render a function must be used
                if (countdownStatus !== 'stopped') {
                    return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
                } else  {
                   return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
                }
            };

            return(
                <div>
                    <h1 className="page-title">Countdown App</h1>
                    <Clock totalSeconds={count}/>
                    {renderControlArea()}
                </div>
            );
        }
    });

module.exports = Countdown;