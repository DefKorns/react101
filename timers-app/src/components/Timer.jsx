import { Component } from "react";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString } from "../helpers";

export default class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {
        const { id, title, project, elapsed, runningSince, onEditClick, onTrashClick, onStopClick, onStartClick } = this.props;
        const elapsedTime = renderElapsedString(elapsed, runningSince);

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{project}</div>
                    <h2 className="center aligned description">
                        {elapsedTime}
                    </h2>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={onEditClick}>
                            <i className="edit icon"></i>
                        </span>
                        <span className="right floated trash icon" onClick={onTrashClick}>
                            <i className="trash icon"></i>
                        </span>
                    </div>
                </div>

                <TimerActionButton
                    timerIsRunning={!!runningSince}
                    onStopClick={() => onStopClick(id)}
                    onStartClick={() => onStartClick(id)}
                />
            </div>
        )
    }
}