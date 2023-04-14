import { Component } from "react";
import TimerForm from "./TimerForm";

export default class ToggleableTimerForm extends Component {

    state = {
        isOpen: false
    }

    handleFormOpen = () => this.openForm();

    handleFormClose = () => this.closeForm();

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    openForm = () => this.setState({ isOpen: true });

    closeForm = () => this.setState({ isOpen: false });

    render() {
        const { isOpen } = this.state;

        if (isOpen) {
            return (
                <TimerForm
                    onFormClose={this.handleFormClose}
                    onFormSubmit={this.handleSubmit}
                />
            );
        }

        return (
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon" onClick={this.handleFormOpen}>
                    <i className="plus icon"></i>
                </button>
            </div>
        )
    }
}