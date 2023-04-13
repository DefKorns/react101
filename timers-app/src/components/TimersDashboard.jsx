import { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "../helpers";
import api from '../api';

export default class TimersDashboard extends Component {

    state = {
        timers: [
            // newTimer({ title: 'First' }),
            // newTimer({ title: 'Second' }),
        ]
    }

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }

    loadTimersFromServer = () => {
        api.getTimers(timers => this.setState({ timers }));
    }

    handleCreateFormSubmit = (timer) => this.createTimer(timer);

    handleUpdateFormSubmit = (timer) => this.updateTimer(timer);

    handleTrashClick = (id) => this.deleteTimer(id);

    handleStartClick = (id) => this.startTimer(id);

    handleStopClick = (id) => this.stopTimer(id);

    createTimer = (timer) => {
        const t = newTimer(timer);
        this.setState({ timers: [...this.state.timers, t]});

        api.createTimer(t);
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (attrs.id === timer.id) {
                    return { ...timer, title: attrs.title, project: attrs.project };
                }
                return timer;
            })
        });

        api.updateTimer(attrs);
    }

    deleteTimer = (id) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== id)
        });

        api.deleteTimer({ id });
    }

    startTimer = (id) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return { ...timer, runningSince: now }
                }
                return timer;
            })
        });

        api.startTimer({ id, start: now });
    }

    stopTimer = (id) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    const lastElapsed = now - timer.runningSince;
                    return { ...timer, runningSince: null, elapsed: timer.elapsed + lastElapsed };
                }
                return timer;
            })
        });

        api.stopTimer({ id, stop: now });
    }

    render() {
        const { timers } = this.state;
        
        return (
            <div className="ui column centered grid">
                <div className="column">
                    <EditableTimerList 
                        timers={timers} 
                        onFormSubmit={this.handleUpdateFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
                </div>
            </div>
        )
    }
}