import { Component } from "react";

export default class TimerActionButton extends Component {

    render() {
        const { timerIsRunning, onStartClick, onStopClick } = this.props;

        return (
            <div>
                {
                    timerIsRunning ? (
                        <div className="ui bottom attached red basic button" onClick={onStopClick}>Stop</div>
                    ) : (
                        <div className="ui bottom attached green basic button" onClick={onStartClick}>Start</div>
                    )
                }
            </div>
        );
    }
}