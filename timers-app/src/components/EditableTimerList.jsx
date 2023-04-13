import { Component } from "react";
import EditableTimer from "./EditableTimer";

export default class EditableTimerList extends Component {

    render() {
        const { timers, onFormSubmit, onTrashClick, onStopClick, onStartClick } = this.props;

        return (
            <div>
                {timers.length === 0 && <p>No timers added</p>}
                
                {timers.map(timer => (
                    <EditableTimer 
                        key={timer.id}
                        id={timer.id}
                        title={timer.title}
                        project={timer.project}
                        elapsed={timer.elapsed}
                        runningSince={timer.runningSince}

                        onFormSubmit={onFormSubmit}
                        onTrashClick={onTrashClick}
                        onStopClick={onStopClick}
                        onStartClick={onStartClick}
                    />
                ))}
            </div>
        )
    }
}