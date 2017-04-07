var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
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
                }
            }
        },
        startTimer: function () {
            this.timer =  setInterval(() => {
                var newCount = this.state.count -1;
                this.setState({
                    count: newCount >= 0 ? newCount : 0
                });
            }, 1000);
        },
        handleSetCountdown: function (seconds) { // this will get called when the form get valid input
           this.setState({
               count: seconds,  // sends the updated state
               countdownStatus: 'started'
           });
        },
        render: function() {
            var {count} = this.state;

            return(
                <div>
                    <Clock totalSeconds={count}/>
                    <CountdownForm onSetCountdown={this.handleSetCountdown}/>
                </div>
            );
        }
    });

module.exports = Countdown;